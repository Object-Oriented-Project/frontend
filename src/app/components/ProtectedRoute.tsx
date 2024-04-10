import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn"); // your authentication check logic here;
    const loginTime = localStorage.getItem("loginTime");
    const seesion = 10 * 60 * 60 * 1000; // 1 day in milliseconds

    if (
      !isLoggedIn ||
      isLoggedIn !== "true" ||
      Date.now() - loginTime > seesion
    ) {
      // Reset authentication state and redirect to login if timeout or not authenticated
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("loginTime");
      router.push("/admin/login");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
