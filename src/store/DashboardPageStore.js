import { create } from "zustand";
import { fetchBarChart, fetchCircleChart, fetchProcessSystem } from "../api/api";

const DashboardPageStore = create((set) => ({
  processData: null,  
  barChartData: null,  
  circleChartData: null,  
  loading: false,
  error: null,
  // Fetch process system data
  fetchProcessSystem: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetchProcessSystem();
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ processData: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  // Fetch bar chart data
  fetchBarChart: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetchBarChart();
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ barChartData: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
  // Fetch circle chart data
  fetchCircleChart: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetchCircleChart();
      if (response.error) {
        set({ loading: false, error: response.error });
      } else {
        set({ circleChartData: response.data, loading: false });
      }
    } catch (error) {
      set({ loading: false, error: error.message });
    }
  },
}));

export default DashboardPageStore;
