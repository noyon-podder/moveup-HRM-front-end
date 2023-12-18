import axios from "axios";
import { useEffect, useState } from "react";

const AccountExpences = () => {
  const [accountData, setAccountData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Acounts.json")
      .then((data) => {
        setAccountData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="mb-[45px]">
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
                {accountData?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.project_name}</td>
                    <td>{item?.client_Name}</td>
                    <td>{item?.status}</td>
                    <td>{item?.date}</td>
                    <td>
                      <img src={item?.card} alt="" />
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
                    <td>{item?.salary}</td>
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

export default AccountExpences;
