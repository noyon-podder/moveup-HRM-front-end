import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

const GridDepartmentPage = () => {
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
    <div className="mt-[25px]">
      <div className="flex items-center justify-between mt-3 border border-gray-100 p-3 bg-white rounded-lg">
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

      <div className="mt-4 grid grid-cols-4 gap-4 mb-10">
        {usersData?.map((item, index) => (
          <div className="card bg-white border border-gray-100" key={index}>
            <figure>
              <img
                src={item?.profile_url}
                alt="Shoes"
                className="w-[75px] mt-[15px]"
              />
            </figure>
            <h2 className="text-center font-bold mt-[15px]">
              {item?.department_head}
            </h2>
            <p className="text-[#8F9BB3] text-center mt-[4px]">
              {item?.department_name}
            </p>
            <div className="flex items-center justify-center my-[20px]">
              <button className="mr-1 bg-[#0095FF] rounded-md p-1">
                <AiOutlineEdit size={25} color="#FFFFFF"></AiOutlineEdit>
              </button>
              <button className=" bg-[#EFF4FA] rounded-md p-1">
                <AiOutlineDelete size={25} color="#C5CEE0"></AiOutlineDelete>
              </button>
            </div>
            <hr />
            <div className="flex items-center justify-evenly my-5">
              <div>
                <h3 className="text-center font-bold mt-[15px]">
                  {item?.total_employee}
                </h3>
                <p className="text-[#8F9BB3]">Employee</p>
              </div>
              <div>
                <h3 className="text-center font-bold mt-[15px]">
                  {"$"}
                  {item?.salary}
                </h3>
                <p className="text-[#8F9BB3]">Earnings</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridDepartmentPage;
