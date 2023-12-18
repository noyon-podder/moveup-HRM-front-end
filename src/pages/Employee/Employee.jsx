import axios from "axios";
import { useEffect, useState } from "react";
import AllEmployee from "./AllEmployee";
import LeaveRequest from "./LeaveRequest";
import ViewEmployee from "./ViewEmployee";

const Employee = () => {
  const [isPage, setIsPage] = useState(1);
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
    <div className="mb-[100px]">
      <div className="flex items-center gap-[35px] mt-5">
        {isPage == 1 ? (
          <button onClick={() => setIsPage(1)}>All</button>
        ) : (
          <button className="text-[#8F9BB3]" onClick={() => setIsPage(1)}>
            All
          </button>
        )}
        {isPage == 2 ? (
          <button onClick={() => setIsPage(2)}>View</button>
        ) : (
          <button className="text-[#8F9BB3]" onClick={() => setIsPage(2)}>
            View
          </button>
        )}
        {isPage == 3 ? (
          <button onClick={() => setIsPage(3)}>leave request</button>
        ) : (
          <button className="text-[#8F9BB3]" onClick={() => setIsPage(3)}>
            leave request
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[37px]">
        {employData?.slice(0, 4)?.map((item, index) => (
          <div
            className="bg-white py-[24px] px-[22px] rounded-2xl border-gray-300 border"
            key={index}
          >
            <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
              <div className="flex flex-col gap-[5px] w-[136px]">
                <p className="text-[#8F9BB3] text-sm font-medium ">
                  {item?.title}
                </p>
                <h1 className="font-bold text-[24px] text-heading dark:text-darkHeading">
                  {item?.total_employee}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        {isPage == 1 ? (
          <AllEmployee />
        ) : isPage == 2 ? (
          <ViewEmployee />
        ) : (
          <LeaveRequest />
        )}
      </div>
    </div>
  );
};

export default Employee;
