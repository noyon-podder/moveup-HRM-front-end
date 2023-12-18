import EmployeeStructureChart from "../../components/dashboardChart/EmployeeStructureChart";
import { FaBars } from 'react-icons/fa';

const EmployeeStructure = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between mx-5 py-[6px]">
                <h6 className="text-[18px] text-heading dark:text-darkHeading font-medium">
                    Employee Structure
                </h6>
                    <button className="btn bg-white hover:bg-white border-0"><FaBars size={30}></FaBars></button>
            </div>
            <hr />
            <div className="p-10 mt-16">
                <EmployeeStructureChart></EmployeeStructureChart>
            </div>
        </div>
    );
};

export default EmployeeStructure;