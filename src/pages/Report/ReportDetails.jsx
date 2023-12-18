import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ReportDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const [prodect, setProdect] = useState([]);

  useEffect(() => {
    axios
      .get("./data/UserDetails.json")
      .then((data) => {
        setUserDetails(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("./data/Projects.json")
      .then((data) => {
        setProdect(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(prodect);
  return (
    <div className="mt-[25px] border-gray-200 rounded-lg mb-[115px] bg-white">
      <div className="mx-5">
        <div className="flex items-center justify-between">
          <p className="mt-5">{userDetails?.user_id}</p>
          <button className="btn bg-[#0095FF] hover:bg-[#0095FF] btn-sm text-white mt-5">
            Print Invoice
          </button>
        </div>

        <div className="mt-[30px] flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-[17px]">Company</h2>
            <p>{userDetails?.address}</p>
            <p>{userDetails?.city}</p>
            <p>{userDetails?.postal_code}</p>
            <Link to={`mailto:${userDetails?.company_mail}`}>
              {userDetails?.company_mail}
            </Link>
          </div>
          <div>
            <h2 className="font-semibold text-[17px]">Client</h2>
            <p>{userDetails?.address}</p>
            <p>{userDetails?.city}</p>
            <p>{userDetails?.postal_code}</p>
            <Link to={`mailto:${userDetails?.clint_mail}`}>
              {userDetails?.clint_mail}
            </Link>
          </div>
        </div>

        {/* Table start */}
        <div className="mb-[120px]">
          <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="bg-[#EFF4FA]">
                  <tr>
                    <th className="text-[#8F9BB3] font-semibold text-sm"></th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Product
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      QNT
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Unit
                    </th>
                    <th className="text-[#8F9BB3] font-semibold text-sm">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prodect?.slice(0, 3)?.map((item, index) => (
                    <tr key={index}>
                      <td className="border-r">{item?.id}</td>
                      <td className="border-r">
                        <div>
                          <h3 className="text-[#222B45] text-sm font-semibold">
                            {item?.title}
                          </h3>
                          <p> {item?.text}</p>
                        </div>
                      </td>
                      <td className="border-r">{item?.qut}</td>
                      <td className="border-r">${item?.unit}</td>
                      <td>
                        {"$"}
                        {item?.unit}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="border-r">{""}</td>
                    <td className="border-r text-[#222B45] text-sm font-semibold">
                      Subtotal
                    </td>
                    <td>$27,960</td>
                  </tr>
                  <tr>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="border-r">{""}</td>
                    <td className="border-r text-[#222B45] text-sm font-semibold">
                      Cat Rate
                    </td>
                    <td>$20%</td>
                  </tr>
                  <tr>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="border-r">{""}</td>
                    <td className="border-r text-[#222B45] text-sm font-semibold">
                      Vat Due
                    </td>
                    <td className="border-r">$5,592</td>
                  </tr>
                  <tr className="bg-[#94CBFF]">
                    <td>{""}</td>
                    <td>{""}</td>
                    <td>{""}</td>
                    <td className="text-white text-sm font-semibold">
                      {"Total Due"}
                    </td>
                    <td className="text-white text-sm font-semibold">
                      $33,552
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
