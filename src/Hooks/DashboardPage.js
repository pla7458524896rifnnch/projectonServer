 
import DashboardPageStore from "../store/DashboardPageStore";

const useGetDashboardPageStore = () => {
  const { loading, processData, barChartData, circleChartData, error, fetchProcessSystem, fetchBarChart, fetchCircleChart } = DashboardPageStore();
  
  return { 
    loading, 
    processData,  
    barChartData, 
    circleChartData, 
    error, 
    fetchProcessSystem, 
    fetchBarChart, 
    fetchCircleChart 
  };
};

export default useGetDashboardPageStore;
