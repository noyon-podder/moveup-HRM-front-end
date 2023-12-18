import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import AddUserModal from "./AddUserModal";

const Users = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Users.json")
      .then((data) => {
        setUsersData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-6 w-full mb-10">
      <div className="flex justify-end">
        <a href="#addUser_modal" onClick={() => setIsOpen(true)}>
          <button className="btn bg-[#00E096] hover:bg-[#00E096] text-white">
            Add User
          </button>
        </a>
      </div>
      <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
        <div className="flex items-center justify-between mt-3">
          <h2 className=" ml-3 font-bold">List Users</h2>
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
                  <th className="text-[#8F9BB3]">Name</th>
                  <th className="text-[#8F9BB3]"></th>
                  <th className="text-[#8F9BB3]">Create Date</th>
                  <th className="text-[#8F9BB3]">Role</th>
                  <th className="text-[#8F9BB3]">Action</th>
                </tr>
              </thead>
              <tbody>
                {usersData?.map((item, index) => (
                  <tr key={index}>
                    <td className="flex items-center">
                      <div className="avatar">
                        <div className="w-10">
                          <img src={item?.profile_url} />
                        </div>
                      </div>
                      <div className="ml-1">
                        <h3 className="font-semibold">{item?.user_name}</h3>
                        <p className="text-[#8F9BB3]">{item?.email}</p>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-xs text-black rounded-xl w-[100px]"
                        style={{ backgroundColor: `${item?.bg_color}` }}
                      >
                        {item?.isAdmin}
                      </button>
                    </td>
                    <td>
                      <p>{item?.created_at}</p>{" "}
                    </td>
                    <td>
                      <p>{item?.role}</p>{" "}
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

      {isOpen && <AddUserModal setIsOpen={setIsOpen}></AddUserModal>}
    </div>
  );
};

export default Users;
