import AuthStore from "../store/AuthStore";
const useGetAuth = () => {
  const { user, loading, error, login, register, logout  } = AuthStore();
  return {
    user,
    loading,
    error,
    login,
    register,
    logout
  };
};
export default useGetAuth;
