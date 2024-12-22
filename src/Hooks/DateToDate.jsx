import moment from "moment-jalaali";  

export function useDateToDate() {   
    const DateToFa = (iso) => {  
        const year = moment(iso).locale('fa').format('jYYYY/jM/jD');  // تاریخ  
        const time = moment(iso).locale('fa').format('HH:mm:ss');      // ساعت  
        
        return (  
           <>
{year=='Invalid date'||time=='Invalid date'?(<span></span>):(<span>  
    {year} - {time}  
</span>  )}
           </>
        );  
    }  

    return {  
        DateToFa  
    }  
}  

export const useDateToTime=(iso)=>{
    const time = moment(iso).locale('fa').format('HH:mm');      // ساعت  
    return time
}