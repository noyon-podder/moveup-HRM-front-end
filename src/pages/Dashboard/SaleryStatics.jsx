/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import SaleryStaticsChart from "../../components/dashboardChart/SaleryStaticsChart";


const SaleryStatics = () => {

    const [mounted, setMounted] = useState(false);

    return (
        <div className="">
            <div className="flex items-center justify-between mx-5">
                <h6 className="text-[18px] text-heading dark:text-darkHeading font-medium">
                    Salary Statistics
                </h6>
                <div className="flex flex-wrap items-center justify-between gap-[8px]">
                    <div className="flex items-center gap-[14px]">
                        <h4 className="text-[#8F9BB3]">Last year comparision:</h4>
                        <button
                            onClick={() => mounted === false ? setMounted(true) : setMounted(false)}
                            className={
                                "flex items-center gap-[10px] text-sky-500 text-sm font-medium hover:text-main hover:font-semibold"
                            }
                        >
                            {mounted === true ? (
                                <BiToggleRight size={60} />
                            ) : (
                                <BiToggleLeft size={60} />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="p-10">
                <SaleryStaticsChart></SaleryStaticsChart>
            </div>
            <div className="flex items-center justify-between mx-4 mb-5">
                <button className="btn bg-[#00E096] hover:bg-[#00E096] text-white rounded-full text-[13px]">Generate Report</button>
                <p className="ml-2">Measure how fast you're growing monthly recurring revenue. <span className="text-sky-500">Learn More</span></p>
            </div>
        </div>
    );
};

export default SaleryStatics;