import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { PiPrinterBold } from "react-icons/pi";

const ReportInvoices = () => {
  const [invoicesData, setInvoices] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Invoices.json")
      .then((data) => {
        setInvoices(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(invoicesData);
  return (
    <div className="mb-[128px]">
      <div className="border rounded-lg border-gray-200 bg-white w-full mt-[25px] flex items-center justify-around py-[30px]">
        {invoicesData?.slice(0, 3)?.map((item, index) => (
          <div key={index}>
            <h3 className="text-center text-[20px] font-bold">
              {item?.amount}
            </h3>
            <p className="text-[#8F9BB3] text-center">{item?.main_status}</p>
          </div>
        ))}
      </div>

      {/* Table Start */}
      <div className=" border border-gray-300 rounded-lg bg-white mt-[15px]">
        <div className="flex items-center justify-between mt-3">
          <h2 className=" ml-3 font-bold">Invoices</h2>
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
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Invoice No
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Clients
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">Date</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">Type</th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Status
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Salary
                  </th>
                  <th className="text-[#8F9BB3] font-semibold text-sm">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {invoicesData?.map((item, index) => (
                  <tr key={index}>
                    <td>{item?.invoice_no}</td>
                    <td>{item?.client_Name}</td>
                    <td>{item?.data}</td>
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
                      {item?.salary}
                    </td>
                    <td>
                      <div className="flex items-center">
                        <MdOutlineForwardToInbox
                          size={20}
                          color="#C5CEE0"
                          className="mr-3"
                        ></MdOutlineForwardToInbox>
                        <PiPrinterBold
                          size={20}
                          color="#C5CEE0"
                          className=""
                        ></PiPrinterBold>
                        <AiOutlineDelete
                          size={20}
                          color="#C5CEE0"
                          className="ml-3"
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
  );
};

export default ReportInvoices;
