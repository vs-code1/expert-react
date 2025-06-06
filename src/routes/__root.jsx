import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import HomePage from "../pages/HomePage";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </>
    );
  },
});
