import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

import axios from "axios";
import { useEffect, useState } from "react";

const LeaveRequest = () => {
  const [employData, setEmployData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Employee.json")
      .then((data) => {
        setEmployData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-9 relative mt-[-192px] ml-[120px]">
        <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
      </div>
      <div className="mt-[200px]">
        <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
          <div>
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
                      Leave Type
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Date
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Reason
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {employData?.slice(0, 4)?.map((item, index) => (
                    <tr key={index}>
                      <td className="flex items-center">
                        <div className="avatar">
                          <div className="w-10">
                            <img src={item?.employee_profile} />
                          </div>
                        </div>
                        <div className="ml-1">
                          <h3 className="font-semibold">{item?.client_Name}</h3>
                        </div>
                      </td>
                      <td>
                        <p>{item?.employee_id}</p>
                      </td>
                      <td>
                        <p>{item?.leave_type}</p>
                      </td>
                      <td>
                        <p>{item?.leave_data}</p>
                      </td>
                      <td>
                        <p>{item?.leave_reason}</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveRequest;
