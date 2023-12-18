import { FiSearch } from "react-icons/fi";
import one from "../../assets/projectSummaryImage/Oval Copy 2 (1).png"
import two from "../../assets/projectSummaryImage/Oval Copy 2.png"
import three from "../../assets/projectSummaryImage/Oval Copy 8.png"
import four from "../../assets/projectSummaryImage/Oval Copy.png"
import five from "../../assets/projectSummaryImage/Oval Copy9.png"
import six from "../../assets/projectSummaryImage/Oval-4.png"
import seven from "../../assets/projectSummaryImage/Oval-5.png"
import eight from "../../assets/projectSummaryImage/Oval-6.png"
import nine from "../../assets/projectSummaryImage/Oval-7.png"
import ten from "../../assets/projectSummaryImage/Oval.png"
const GroupsList = () => {
  return (
    <div>
      <div className="border-t border-blue-500 w-10"></div>
      <div className="flex items-center justify-start gap-9 mt-5">
        <h2 className="text-sm text-[#222B45]">Users</h2>
        <h2 className="text-sm text-[#8F9BB3]">Groups</h2>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between mt-5">
        <div>
          <input
            type="search"
            placeholder="Search..."
            className="outline-none border-n bg-transparent"
          />
        </div>
        <div>
          <FiSearch className="text-[#8F9BB3] text-xl cursor-pointer" />
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={one} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#0095FF] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">Lucy Fox</h2>
            <p className="text-sm text-[#8F9BB3] font-normal">Yes, I see.</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={two} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#C5CEE0] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">
              Cora Medina
            </h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Check this, pls
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={three} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#C5CEE0] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">
              Eula Horton
            </h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Well we have good budget
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={ten} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#FFB45E] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">Lena Page</h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Are we meeting today?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={four} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#0095FF] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">
              Victoria Perez
            </h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Do you like this?
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={five} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#FFB45E] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">Ina Hogan</h2>
            <p className="text-sm text-[#8F9BB3] font-normal">Yes, I see.</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={six} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#C5CEE0] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">
              Devin Harmon
            </h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Hi, {"I'm"} Devin Harmon
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={seven} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#FFB45E] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">Alex Role</h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Sure, I think like you
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={eight} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#0095FF] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">Lucy Fox</h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Same, look at link
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-white border border-gray-200 rounded-xl p-2 mb-3">
          <div className="relative">
            <img src={nine} alt="OvalCopy6" width="32px" height="32px" />
            <div className="w-[10px] h-[10px] bg-[#C5CEE0] rounded-full border-2 border-white absolute  right-0 bottom-0"></div>
          </div>
          <div>
            <h2 className="text-sm text-[#222B45] font-semibold">Rena Paul</h2>
            <p className="text-sm text-[#8F9BB3] font-normal">
              Oh, thanks a lot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsList;
