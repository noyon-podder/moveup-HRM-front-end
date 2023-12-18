import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDelete,
  AiOutlineEdit,
} from "react-icons/ai";

const Holidays = () => {
  const [holidaysData, setHolidaysData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Holiday.json")
      .then((data) => {
        setHolidaysData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(holidaysData);
  return (
    <div className="mt-6 w-full mb-10">
      <div className="flex items-center justify-end">
        <a href="#">
          <button className="btn bg-[#00E096] hover:bg-[#00E096] text-white">
            Add Holidays
          </button>
        </a>
      </div>
      <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#EFF4FA]">
                <tr>
                  <th className="text-[#8F9BB3] text-sm">Day</th>
                  <th className="text-[#8F9BB3] text-sm">date</th>
                  <th className="text-[#8F9BB3] text-sm">Reason</th>
                  <th className="text-[#8F9BB3] text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {holidaysData?.slice(0, 9)?.map((holidayData, index) => (
                  <tr key={index}>
                    <td>{holidayData?.day}</td>
                    <td>{holidayData?.date}</td>
                    <td>{holidayData?.reason}</td>
                    <td>
                      <div className="flex items-center">
                        <AiOutlineEdit
                          size={20}
                          color="#C5CEE0"
                          className="mr-1 cursor-pointer"
                        ></AiOutlineEdit>
                        <AiOutlineDelete
                          size={20}
                          color="#C5CEE0"
                          className="ml-2 cursor-pointer"
                        ></AiOutlineDelete>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <hr />
            {holidaysData?.length >= 10 && (
              <div className="flex items-center justify-between mx-3 my-3">
                <div>
                  <button className="text-[#C5CEE0] flex items-center gap-2">
                    <AiOutlineArrowLeft size={20}></AiOutlineArrowLeft>Prev
                  </button>
                </div>
                <div>
                  <button className="mr-3">1</button>
                  <button className="text-[#C5CEE0]">2</button>
                  <button className="ml-3">3</button>
                </div>
                <div>
                  <button className="text-[#C5CEE0] flex items-center gap-2">
                    Next <AiOutlineArrowRight size={20}></AiOutlineArrowRight>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holidays;
