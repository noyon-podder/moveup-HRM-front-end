import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";
import PayrollEmployee from "./PayrollEmployee";
import Payslip from "./Payslip";

const Payroll = () => {
  const [isPage, setIsPage] = useState(1);
  const [employData, setEmployData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/EmployeePayroll.json")
      .then((data) => {
        setEmployData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(employData);
  return (
    <div>
      {isPage == 1 ? (
        <div className="grid grid-cols-11 gap-10 relative mt-[-4px]">
          <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
        </div>
      ) : (
        <div className="grid grid-cols-11 gap-10 relative mt-[-4px] ml-[100px]">
          <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-[35px]">
          {isPage == 1 ? (
            <button onClick={() => setIsPage(1)}>Employee</button>
          ) : (
            <button className="text-[#8F9BB3]" onClick={() => setIsPage(1)}>
              Employee
            </button>
          )}
          {isPage == 2 ? (
            <button onClick={() => setIsPage(2)}>Payslip</button>
          ) : (
            <button className="text-[#8F9BB3]" onClick={() => setIsPage(2)}>
              Payslip
            </button>
          )}
        </div>
        <div>
          <button className=" btn bg-[#00E096] hover:bg-[#00E096] rounded-lg border text-white">
            Add New
          </button>
        </div>
      </div>

      {isPage == 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[37px]">
          {employData?.slice(0, 4)?.map((item, index) => (
            <div
              className="bg-white py-[24px] px-[22px] rounded-2xl border-gray-300 border"
              key={index}
            >
              <p>{item?.title}</p>
              <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
                {"$"}
                {item?.total_amount}
              </h1>
              <div className="xl:flex lg:block items-center gap-1">
                <p className="flex items-center">
                  <AiOutlineVerticalAlignBottom
                    size={20}
                  ></AiOutlineVerticalAlignBottom>{" "}
                  <span className="text-red-500">
                    {item?.intrest_amount}
                    {"%"}
                  </span>
                </p>
                <p>Since last month </p>
              </div>
            </div>
          ))}
        </div>
      )}
      {isPage == 1 ? <PayrollEmployee></PayrollEmployee> : <Payslip></Payslip>}
    </div>
  );
};

export default Payroll;
