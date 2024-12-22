import { BarChart } from "./barChart";
import CircleChart from "./circleChart";

function ChartCard({ title, chartType,data }) {
  
    const chartData2 = {  
      data: [350, 20, 84],  
    labels :["فارسی", "انگلیسی", "عربی"]
    };
    const chartData = {  
      data: [150, 230, 180, 290, 200, 320, 250],  
    labels : ["شنبه", "یکشنبه", "دوشنبه", "سشنبه", "چهارشنبه", "پنج شنبه", "جمعه"]  
    }; 
    return (
      <div className="bg-white relative  w-full rounded-lg shadow">
        <h3 className="text-gray-700 absolute right-4 top-4">{title}</h3>
        <div className="mt-4">
          {/* Replace with a chart library */}
          <div className="h-fit flex items-center justify-center">
            {chartType === "bar" ? (
              // <BarChart data={data} labels={labels}  />
              <BarChart 
              data={(data||chartData).data}  
              labels={(data||chartData).labels}  
              title={chartData.title}  
              barColor='linear-gradient(135deg, #4DE9A8 0%, #024227 100%)'  
              showValues={false}  
              gridLines={5}  
              height="h-64"  
              width="w-96"  
            /> 
            ) : (
              <CircleChart data={(data||chartData2).data} labels={(data||chartData2).labels} title={''} />
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default ChartCard