import { useEffect } from "react";  
import DashboardPageStore from "../store/DashboardPageStore";  
import ChartCard from "../components/chartCard";  
import { ActiveUsersIcon, ProcessedMessagesIcon, RevenueIcon } from "../components/icons";
import { fetchWhoAmI } from "../api/api";

function Dashboard() {  
  const {  
    loading,  
    processData,  
    barChartData,  
    circleChartData,  
    error,  
    fetchProcessSystem,  
    fetchBarChart,  
    fetchCircleChart,  
  } = DashboardPageStore();  

 
  return (  
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-custom overflow-x-auto">  
      {/* Top Stats */}  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
         
        <StatCard  
          title="کاربران فعال --> تست"  
          value={processData ? processData.users : "۳۷۱"}  
          icon={ActiveUsersIcon}  
        />  
        <StatCard  
          title="درآمد --> تست "  
          value={(<><p>ریال</p><p>{processData ? processData.ex : "۳۵۰,۴۰۰,۰۰۰"}</p></>)}
          icon={RevenueIcon}  
        />  
        <StatCard  
          title="پیام‌های بررسی شده --> تست"  
          value={processData ? processData.messages : "۲۴۹"}  
          icon={ProcessedMessagesIcon}  
        />  
      </div>  
      {/* Charts */}  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">  
        <ChartCard title=" مکالمات اخیر --> تست" data={barChartData} chartType="bar" />  
        <ChartCard title="گفتگوها --> تست" data={circleChartData} chartType="circle" />  
      </div>  
    </div>  
  );  
}  

// Stat Card Component
const StatCard = ({ title, value, icon: Icon }) => (  
  <div className="p-4 rounded-lg shadow bg-white transition-transform transform hover:scale-105 text-center md:text-left">  
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0">  
      <div className="text-3xl">  
        <Icon />  
      </div>  
      <div>  
        <h3 className="text-[#868686] text-lg md:text-xl font-bold">{title}</h3>  
        <p className="text-sm md:text-md flex py-2 font-bold text-[#003A06]">{value}</p>  
      </div>  
    </div>  
  </div>  
);  

export default Dashboard;
