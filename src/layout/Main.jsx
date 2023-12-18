import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import SideNavbar from "../shared/sideNavbar/SideNavbar";

const Main = () => {
  return (
    <div className="bg-[#F9FBFD] min-h-screen w-full">
      {/* <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-2">
          <SideNavbar></SideNavbar>
        </div>
        <div className="lg:col-span-10">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div> */}

      <div className="grid xl:grid-cols-12 lg:grid-cols-10 grid-cols-4">
        <div className="xl:col-span-2 lg:col-span-2 col-span-1">
          <SideNavbar></SideNavbar>
        </div>
        <div className="xl:col-span-10 lg:col-span-8 col-span-3 mr-[30px]">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>

      {/* <div className="flex">
        <div className="min-w-[250px]">
          <SideNavbar></SideNavbar>
        </div>
        <div className="">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div> */}
    </div>
  );
};

export default Main;
