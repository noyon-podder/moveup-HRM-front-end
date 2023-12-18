import axios from "axios";
import { useEffect, useState } from "react";

const ReportExpences = () => {
  const [expencesData, setExpencesData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/ReportExpences.json")
      .then((data) => {
        setExpencesData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(expencesData);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[37px]">
        {expencesData?.slice(0, 4)?.map((item, index) => (
          <div
            className="bg-white py-[24px] xl:px-[22px] lg:px-[10px] rounded-2xl border-gray-300 border"
            key={index}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-[20px]">
                  {"$"}
                  {item?.cost}{" "}
                </p>
                <h1 className="text[#8F9BB3]"> {item?.title} </h1>
              </div>
              <h1 className="text-[#0095FF] text-[30px]">
                {item?.rating}
                {"%"}
              </h1>
            </div>
            <progress
              className="progress progress-primary xl:w-56 lg:w-30 mt-5"
              value={item?.rating}
              max="100"
            ></progress>
          </div>
        ))}
      </div>

      {/* Table start */}
      <div className="mb-[120px]">
        <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#EFF4FA]">
                <tr>
                  <th className="text-[#8F9BB3] font-semibold text-sm">Item</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Order By
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">From</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">Date</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Paid By
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {expencesData?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.item_name}</td>
                    <td>{item?.order_by}</td>
                    <td>{item?.pay_from}</td>
                    <td>{item?.date}</td>
                    <td>
                      <img src={item?.card} alt="card" />
                    </td>
                    <td>
                      <div className="flex items-center">
                        <span
                          className="w-2 h-2 rounded-full mr-1"
                          style={{
                            backgroundColor: `${item?.bg_color}`,
                          }}
                        ></span>
                        <p>{item?.status}</p>
                      </div>
                    </td>
                    <td>
                      {"$"}
                      {item?.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportExpences;
