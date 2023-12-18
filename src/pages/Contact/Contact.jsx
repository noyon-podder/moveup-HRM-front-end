import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaGripHorizontal, FaListUl } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { Link } from "react-router-dom";
import AdDContact_modal from "./AdDContact_modal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    // axios
    //   .get("./data/Contact.json")
    //   .then((data) => {
    //     setContactData(data?.data);
    //   })
    //   .catch((err) => console.log(err));
    const contactDataAll = localStorage.getItem("contactData");
    setContactData(JSON.parse(contactDataAll));
  }, []);
  console.log(contactData);
  return (
    <div>
      <div className="mt-4 bg-white p-2 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[#C5CEE0]">My Income</p>
                <h3 className="font-semibold">$5,510</h3>
              </div>
              <div>
                <p className="text-[#C5CEE0]">Site Taffic</p>
                <h3 className="font-semibold">53% up</h3>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-between w-[150px]  border border-[#EFF4FA] cursor-pointer rounded-[10px]">
              <div
                className="w-1/2 text-center px-4 py-2 bg-[#0095FF] border border-[#0095FF]"
                style={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <FaListUl size={32} color="#fff"></FaListUl>
              </div>
              <div className="px-4 text-center py-2 bg-[#F9FBFD] hover:bg-[#F9FBFD] w-1/2 cursor-pointer">
                <FaGripHorizontal size={32} color="#8F9BB3"></FaGripHorizontal>
              </div>
            </div>
            <a href="#addContact_modal" onClick={() => setIsOpen(true)}>
              <button className="btn bg-[#00E096] hover:bg-[#00E096] text-white ml-2 capitalize">
                Add Contact
              </button>
            </a>
          </div>
        </div>
        <hr className="mt-5 mb-4" />

        <div className=" relative">
          <input
            type="text"
            placeholder="Search here..."
            className="h-[34px] placeholder-[#C5CEE0] text-[15px] font-normal outline-none bg-white border border-[#EFF4FA] px-[12px] pl-12 rounded-lg w-full p-5"
          />

          <FiSearch
            className="absolute top-[10px] text-[#C5CEE0] ml-4"
            size={25}
          />
        </div>
      </div>

      {/* Table Starts */}
      <div className="mt-4 mb-[65px]">
        <div className=" border border-gray-300 rounded-lg bg-white mt-[25px]">
          <div className="mt-4">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {contactData?.map((item, index) => (
                    <tr key={index}>
                      <td className="flex items-center">
                        <div className="rating rating-md mr-4">
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                        </div>
                        <div className="avatar">
                          <div className="w-10">
                            <img src={item?.profile} />
                          </div>
                        </div>
                        <div className="ml-1">
                          <h3 className="font-semibold">{item?.name}</h3>
                          <p className="text-[#8F9BB3]">{item?.phone}</p>
                        </div>
                      </td>
                      <td>{item?.email}</td>
                      <td>{item?.address}</td>
                      <td>
                        <div className="flex items-center">
                          <Link to={`mailto:${item?.email}`}>
                            <MdOutlineForwardToInbox
                              size={20}
                              color="#C5CEE0"
                              className="mr-3"
                            ></MdOutlineForwardToInbox>
                          </Link>
                          <Link to={`tel:${item?.phone}`}>
                            <BsTelephone
                              size={20}
                              color="#C5CEE0"
                              className="mr-3"
                            ></BsTelephone>
                          </Link>
                          <AiOutlineDelete
                            size={20}
                            color="#C5CEE0"
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
      {isOpen && <AdDContact_modal setIsOpen={setIsOpen}></AdDContact_modal>}
    </div>
  );
};

export default Contact;
