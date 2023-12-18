import axios from "axios";
import { useEffect, useState } from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlinePlus,
} from "react-icons/ai";
import word from "../../assets/FileManager/037-word.png";
import fill from "../../assets/FileManager/alert-circle-fill.png";

const Hero = () => {
  const [employData, setEmployData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/FileManager.json")
      .then((data) => {
        setEmployData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mb-[70px]">
      <div className="bg-white p-5 rounded-[8px] mt-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[#222B45] text-base">Recently Accessed Files</p>
          <AiOutlinePlus />
        </div>
        <div className="flex items-center justify-start gap-4 pt-6 border-t border-gray-300">
          <div className="w-[220px] border border-gray-300 p-4 flex items-center justify-start gap-3 rounded-md">
            <div>
              <img src={fill} alt="" />
            </div>
            <div>
              <h3 className="text-[#222B45] text-sm font-semibold">Family</h3>
              <p>3 Files, 1.2 GB</p>
            </div>
          </div>
          <div className="w-[220px] border border-gray-300 p-4 flex items-center justify-start gap-3 rounded-md">
            <div>
              <img src={word} alt="" />
            </div>
            <div>
              <h3 className="text-[#222B45] text-sm font-semibold">
                Report2020.doc
              </h3>
              <p>1.2 GB</p>
            </div>
          </div>
          <div className="w-[220px] border border-gray-300 p-4 flex items-center justify-start gap-3 rounded-md">
            <div>
              <img src={word} alt="" />
            </div>
            <div>
              <h3 className="text-[#222B45] text-sm font-semibold">
                Marketing Content...
              </h3>
              <p>3.2 GB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded-[8px] mt-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#EFF4FA]">
              <tr>
                <th className="text-[#8F9BB3]">Name</th>
                <th className="text-[#8F9BB3]">Share With</th>
                <th className="text-[#8F9BB3]">Owner</th>
                <th className="text-[#8F9BB3]">Last Update</th>
                <th className="text-[#8F9BB3]">File Size</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {employData?.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center justify-start gap-3">
                      <img src={item?.icon} />
                      <h4> {item?.title} </h4>
                    </div>
                  </td>
                  <td className="flex items-center">
                    <div className="avatar-group -space-x-4">
                      <div className="avatar">
                        <div className="w-8">
                          <img src={item?.profile_one} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-8">
                          <img src={item?.profile_two} />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-8">
                          <img src={item?.profile_three} />
                        </div>
                      </div>
                      {item?.profile_four && (
                        <div className="avatar">
                          <div className="w-8">
                            <img src={item?.profile_four} />
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                  <td>
                    <p>{item?.owner}</p>{" "}
                  </td>
                  <td>
                    <p>{item?.last_update}</p>{" "}
                  </td>
                  <td>
                    <p>{item?.file_size}</p>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between mx-3 my-3 border-t border-gray-300 pt-3">
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
  );
};

export default Hero;
