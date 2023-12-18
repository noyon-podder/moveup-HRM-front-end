/* eslint-disable react/no-unescaped-entities */
import Balance from "./Balance";
import DashAllTab from "./DashAllTab";
import EmployeeStructure from "./EmployeeStructure";
import Grouth from "./Grouth";
import Performance from "./Performance";
import ProjectSummary from "./ProjectSummary";
import Revenue from "./Revenue";
import SaleryStatics from "./SaleryStatics";


const Dashboard = () => {
    return (
        <div>
            <h2 className="text-[22px] text=[#222B45] font-[400px] mt-5">Welcome Jason Porter!</h2>
            <p className="mt-4">Measure how fast you're growing monthly recurring revenue. <a href="#" className="cursor-pointer text-sky-500">Learn More</a></p>
            <DashAllTab></DashAllTab>

            <div className="grid grid-cols-12 gap-5 mt-4">
                <div className="col-span-6 bg-white border border-gray-300 rounded-lg">
                    <SaleryStatics></SaleryStatics>
                </div>
                <div className="col-span-3 bg-white border border-gray-300 rounded-lg">
                    <Revenue></Revenue>
                </div>
                <div className="col-span-3 bg-white border border-gray-300 rounded-lg">
                    <Balance></Balance>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-5 mt-4">
                <div className="col-span-6 bg-white border border-gray-300 rounded-lg">
                    <EmployeeStructure></EmployeeStructure>
                </div>
                <div className="col-span-3 bg-white border border-gray-300 rounded-lg">
                    <Performance></Performance>
                </div>
                <div className="col-span-3 bg-white border border-gray-300 rounded-lg">
                    <Grouth></Grouth>
                </div>
            </div>
            <div className="mt-4 mb-[85px]">
                <ProjectSummary></ProjectSummary>
            </div>
        </div>
    );
};

export default Dashboard;