import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const AllEmployee = () => {
  const [employData, setEmployData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Employee.json")
      .then((data) => {
        setEmployData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //   console.log(employData);
  return (
    <div>
      <div className="grid grid-cols-11 gap-10 relative mt-[-192px]">
        <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
      </div>
      <div className="mt-[210px]">
        <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
          <div className="flex items-center justify-between mt-3">
            <h2 className=" ml-3 font-bold">Employee List</h2>
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
                    <th className="text-[#8F9BB3] pl-10 font-semibold text-sm">
                      Name
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Employee ID
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Phone
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Join Date
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Role
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employData?.map((item, index) => (
                    <tr key={index}>
                      <td className="flex items-center">
                        <input
                          type="checkbox"
                          className="checkbox-sm checkbox checkbox-primary mr-5 border border-gray-300"
                        />
                        <div className="avatar">
                          <div className="w-10">
                            <img src={item?.employee_profile} />
                          </div>
                        </div>
                        <div className="ml-1">
                          <h3 className="font-semibold">{item?.client_Name}</h3>
                          <p className="text-[#8F9BB3]">{item?.client_mail}</p>
                        </div>
                      </td>
                      <td>
                        <p>{item?.employee_id}</p>
                      </td>
                      <td>
                        <p>{item?.employee_phone}</p>
                      </td>
                      <td>
                        <p>{item?.date}</p>
                      </td>
                      <td>
                        <p>{item?.employee_role}</p>
                      </td>
                      <td>
                        <div className="flex items-center">
                          <AiOutlineEdit
                            size={20}
                            color="#C5CEE0"
                            className="mr-1"
                          ></AiOutlineEdit>
                          <AiOutlineDelete
                            size={20}
                            color="#C5CEE0"
                            className="ml-2"
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

export default AllEmployee;
