import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiPrinterBold } from "react-icons/pi";

const PayrollEmployee = () => {
  const [employData, setEmployData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/EmployeePayroll.json")
      .then((data) => {
        setEmployData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(employData);
  return (
    <div>
      <div className="mb-[45px]">
        <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
          <div className="flex items-center justify-between mt-3">
            <h2 className=" ml-3 font-bold">Department</h2>
            <div className="hidden lg:flex items-center gap-2 w-[305px] p-[5px] rounded-lg border mr-3 ">
              <input
                type="text"
                placeholder="Search..."
                className="bg-none w-full outline-none dark:text-text"
              />
              <BiSearch className="text-text" />
            </div>
          </div>
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-[#EFF4FA]">
                  <tr>
                    <th className="text-[#8F9BB3] font-semibold text-sm">#</th>
                    <th className="text-[#8F9BB3] pl-10 font-semibold text-sm">
                      Employee
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Role
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Salery
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Status
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employData?.map((item, index) => (
                    <tr key={item?.id}>
                      <td>{index}</td>
                      <td className="flex items-center">
                        <div className="avatar">
                          <div className="w-10">
                            <img src={item?.user_profile} />
                          </div>
                        </div>
                        <div className="ml-1">
                          <h3 className="font-semibold">{item?.client_Name}</h3>
                          <p className="text-[#8F9BB3]">{item?.client_mail}</p>
                        </div>
                      </td>
                      <td>
                        <p> {item?.role}</p>{" "}
                      </td>
                      <td>
                        <p>
                          {"$"}
                          {item?.salery}
                        </p>{" "}
                      </td>
                      <td>
                        <div className="flex items-center">
                          <span
                            className="w-2 h-2 rounded-full  mr-1"
                            style={{
                              backgroundColor: `${item?.bg_color}`,
                            }}
                          ></span>
                          <p>{item?.status}</p>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <MdOutlineForwardToInbox
                            size={20}
                            color="#C5CEE0"
                            className="mr-3"
                          ></MdOutlineForwardToInbox>
                          <PiPrinterBold
                            size={20}
                            color="#C5CEE0"
                            className=""
                          ></PiPrinterBold>
                          <AiOutlineDelete
                            size={20}
                            color="#C5CEE0"
                            className="ml-3"
                          ></AiOutlineDelete>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr />

              <div className="flex items-center justify-between mx-3 my-3">
                <div>
                  <button className="text-[#C5CEE0] flex items-center gap-2">
                    <AiOutlineArrowLeft size={20}></AiOutlineArrowLeft>Prev
                  </button>
                </div>
                <div>
                  <button className="mr-3">1</button>
                  <button className="text-[#C5CEE0]">2</button>
                </div>
                <div>
                  <button className="text-[#C5CEE0] flex items-center gap-2">
                    Next <AiOutlineArrowRight size={20}></AiOutlineArrowRight>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollEmployee;
