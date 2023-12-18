import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import AccountExpences from "./AccountExpences";
import AccountInvoice from "./AccountInvoice";
import AccountPayment from "./AccountPayment";

const Accounts = () => {
  const [isPage, setIsPage] = useState(1);
  const [accountData, setAccountData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Acounts.json")
      .then((data) => {
        setAccountData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(accountData);
  return (
    <div>
      {isPage == 1 ? (
        <div className="grid grid-cols-11 gap-10 relative mt-[-4px]">
          <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
        </div>
      ) : isPage == 2 ? (
        <div className="grid grid-cols-11 gap-7 relative mt-[-4px] ml-[90px]">
          <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
        </div>
      ) : (
        <div className="grid grid-cols-11 gap-5 relative mt-[-4px] ml-[190px]">
          <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-[35px]">
          {isPage == 1 ? (
            <button onClick={() => setIsPage(1)}>Invoices</button>
          ) : (
            <button className="text-[#8F9BB3]" onClick={() => setIsPage(1)}>
              Invoices
            </button>
          )}
          {isPage == 2 ? (
            <button onClick={() => setIsPage(2)}>Payments</button>
          ) : (
            <button className="text-[#8F9BB3]" onClick={() => setIsPage(2)}>
              Payments
            </button>
          )}
          {isPage == 3 ? (
            <button onClick={() => setIsPage(3)}>Expences</button>
          ) : (
            <button className="text-[#8F9BB3]" onClick={() => setIsPage(3)}>
              Expences
            </button>
          )}
        </div>
        <div>
          <button className=" btn bg-[#00E096] hover:bg-[#00E096] rounded-lg border text-white">
            Add New
          </button>
        </div>
      </div>

      {isPage == 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] mt-[37px]">
          {accountData?.slice(0, 4)?.map((item, index) => (
            <div
              className="bg-white py-[24px] px-[22px] rounded-2xl border-gray-300 border"
              key={index}
            >
              <p className="font-semibold">{item?.accounts_type}</p>
              <h1 className="font-bold text-center p-8 text-3xl">
                {item?.total_amount}
              </h1>
              <div className="xl:flex lg:block items-center justify-between gap-1">
                <p className="text-[#8F9BB3] ">This Years</p>
                <p className="flex items-center">
                  <AiOutlineVerticalAlignTop
                    size={20}
                    color="#0095FF"
                  ></AiOutlineVerticalAlignTop>{" "}
                  <span className="text-[#0095FF]">
                    {item?.intrest} {"%"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {isPage == 1 ? (
        <AccountInvoice></AccountInvoice>
      ) : isPage == 2 ? (
        <AccountPayment></AccountPayment>
      ) : (
        <AccountExpences></AccountExpences>
      )}
    </div>
  );
};

export default Accounts;
