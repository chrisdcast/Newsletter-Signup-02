import { Outlet } from "react-router-dom";
import Footer from "../components/partials/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <div className="ActiveArea">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
