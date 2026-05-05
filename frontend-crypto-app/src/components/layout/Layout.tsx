import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DemoWarningBanner from "../common/DemoWarningBanner";

function Layout() {
  return (
    <div className="min-h-screen bg-[#f5f7ff] text-slate-900">
      <DemoWarningBanner />
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
