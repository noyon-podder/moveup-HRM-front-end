/* eslint-disable react/no-unescaped-entities */
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiPrinterBold } from "react-icons/pi";
import image from "../../assets/EmployeeProfileView/employeeView.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Payslip = () => {
  const [employData, setEmployData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Payslip.json")
      .then((data) => {
        setEmployData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(employData);
  return (
    <div className="mt-[25px] bg-white border border-gray-200 rounded-lg mb-[125px]">
      <div className="flex items-start justify-between m-5">
        <div className="flex items-start gap-3">
          <img src={image} alt="" className="w-[70px]" />
          <div className="">
            <p className="text-[#8F9BB3] leading-[30px]">
              Order ID : <span className="text-[#0095FF]">04FA</span>{" "}
            </p>
            <h3 className="font-semibold leading-[30px]">David Harmon</h3>
            <p className=" ">
              795 Folsom Ave, Suite 546 San Francisco, CA 54656
            </p>
            <div className="flex items-center mt-3">
              <MdOutlineForwardToInbox
                size={20}
                color="#C5CEE0"
              ></MdOutlineForwardToInbox>
              <PiPrinterBold
                size={20}
                color="#C5CEE0"
                className="ml-6"
              ></PiPrinterBold>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold">15 Oct, 2019</h3>
        </div>
      </div>
      <hr />

      {employData?.map((item, index) => (
        <div className="grid grid-cols-12 py-[30px]" key={index}>
          <div className="col-span-7 flex items-center gap-10 ml-6">
            <p>{item?.id}</p>
            <p>{item?.title}</p>
          </div>
          <div className="col-span-5 grid grid-cols-3 gap-4">
            <p>
              {item?.salary_frist_month === "" ? "-" : "$"}
              {item?.salary_frist_month}
            </p>
            <p>
              {item?.salary_two_month === "" ? "-" : "$"}
              {item?.salary_two_month}
            </p>
            <p>
              {item?.salary_three_month === "" ? "-" : "$"}
              {item?.salary_three_month}
            </p>
          </div>
        </div>
      ))}

      <div className="grid grid-cols-12 py-[30px]">
        <div className="col-span-7 flex items-center gap-10 ml-6"></div>
        <div className="col-span-5 grid grid-cols-3 gap-4">
          <p>$5,090</p>
          <p>$1,560</p>
          <p className="text-[#0095FF] font-bold">$1,770</p>
        </div>
      </div>

      <p className="ml-[30px]">
        <span className="text-[#8F9BB3]">Note: </span>I'm speaking with myseft,
        number one.
      </p>
      <div className="flex items-end justify-end mr-5 mb-5">
        <button className="btn btn-primary btn-sm text-white px-6">
          Print
        </button>
      </div>
    </div>
  );
};

export default Payslip;
