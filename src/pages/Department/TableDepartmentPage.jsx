import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const TableDepartmentPage = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Department.json")
      .then((data) => {
        setUsersData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" border border-gray-100 rounded-lg bg-white mt-[25px]">
      <div className="flex items-center justify-between mt-3">
        <h2 className="ml-3 font-bold text-[17px]">Departments</h2>
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
                <th className="text-[#8F9BB3]">#</th>
                <th className="text-[#8F9BB3]">Department Name</th>
                <th className="text-[#8F9BB3]">Department Head</th>
                <th className="text-[#8F9BB3]">Total Employee</th>
                <th className="text-[#8F9BB3]">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData?.map((item, index) => (
                <tr key={index}>
                  <td>{item?.id}</td>
                  <td>{item?.department_name}</td>
                  <td>{item?.department_head} </td>
                  <td>{item?.total_employee}</td>
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
  );
};

export default TableDepartmentPage;
