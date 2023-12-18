/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get("./data/Search.json")
      .then((data) => {
        setSearchData(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(searchData);
  return (
    <div className="mb-10">
      <div className="mt-4 bg-white p-2 rounded-lg">
        <div className=" relative ml-5 mr-5 mt-2">
          <input
            type="text"
            placeholder="Search here..."
            className="h-[34px] placeholder-[#C5CEE0] text-[15px] font-normal outline-none bg-white border border-[#EFF4FA] px-[12px] pl-12 rounded-lg w-full p-5"
          />

          <FiSearch className="absolute top-[10px] text-black ml-4" size={22} />
        </div>

        <div className="mt-[30px] mb-5 ml-5">
          <h3 className="text-[17px]">Search result for "Boostrap 4 admin"</h3>
          <p className="text-[#8F9BB3]">About 16,853 result ( 0.16 seconds )</p>
        </div>
      </div>

      <hr className="mt-[30px]" />

      <div className="grid grid-cols-11 lg:gap-10 xl:gap-20 relative mt-[-4px]">
        <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
      </div>

      <div className="flex items-center justify-start gap-5 mt-5">
        <h2 className="text-[#222B45] text-base">All</h2>
        <h2 className="text-[#8F9BB3] text-base">Images</h2>
        <h2 className="text-[#8F9BB3] text-base">Videos</h2>
        <h2 className="text-[#8F9BB3] text-base">News</h2>
        <h2 className="text-[#8F9BB3] text-base">More</h2>
      </div>
      <div>
        {searchData?.map((searData, index) => (
          <div
            className="flex items-start justify-between bg-white p-5 mt-[30px]"
            key={index}
          >
            <div>
              <h2 className="text-[17px]">{searData?.title}</h2>
              <Link to={searData?.hrfe} className="text-[#8F9BB3]">
                {searData?.link}
              </Link>
              <p className="text-[#8F9BB3] mt-6">{searData?.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <BsEyeFill size={20} color="#0095FF"></BsEyeFill>
              <p className="text-[#8F9BB3]">{searData?.visit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
