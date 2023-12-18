import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import visa from "../../assets/card/visa.png";

const AccountPayment = () => {
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
                  <th className="text-[#8F9BB3] font-semibold text-sm">ID</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Client Name
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Project Name
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">Date</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">Type</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {accountData?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.id}</td>
                    <td className="flex items-center">
                      <div className="avatar">
                        <div className="w-10">
                          <img src={item?.img} />
                        </div>
                      </div>
                      <div className="ml-1">
                        <h3 className="font-semibold">{item?.client_Name}</h3>
                        <p className="text-[#8F9BB3]">
                          david_wagner@example.com
                        </p>
                      </div>
                    </td>
                    <td>{item?.project_name}</td>
                    <td>{item?.date}</td>
                    <td>
                      <img src={visa} alt="" />
                    </td>
                    <td>
                      {"$"}
                      {item?.salary}
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
  );
};

export default AccountPayment;
