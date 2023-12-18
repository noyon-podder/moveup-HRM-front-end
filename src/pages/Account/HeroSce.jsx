import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineFile,
} from "react-icons/ai";
import profile from "../../assets/EmployeeProfileView/employeeView.png";
import phonelogo from "../../assets/EmployeeProfileView/social copy 2.png";
import beLogo from "../../assets/EmployeeProfileView/social copy 3.png";
import twLogo from "../../assets/EmployeeProfileView/social copy.png";
import fbLogo from "../../assets/EmployeeProfileView/social.png";
import ProgressBar from "./ProgressBar";

import friendsOne from "../../assets/projectSummaryImage/Oval Copy 2 (1).png";
import friendsTwo from "../../assets/projectSummaryImage/Oval Copy 8.png";
import friendsThree from "../../assets/projectSummaryImage/Oval Copy.png";
import friendFour from "../../assets/projectSummaryImage/Oval-4.png";
import friendsFive from "../../assets/projectSummaryImage/Oval-6.png";

const HeroSce = () => {
  return (
    <div className="mb-[70px]">
      <div className="flex gap-3">
        <div className="w-[70%]">
          <div className="w-full grid grid-cols-2 gap-5 my-5">
            <div className="bg-white rounded-lg">
              <div className="flex items-start justify-start gap-4 p-5">
                <div>
                  <img src={profile} alt="profile" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#222B45] text-base">
                    Hattie Watkins
                  </h3>
                  <p className="font-normal text-[#8F9BB3] text-base">
                    Web Developer
                  </p>
                  <div className="flex items-center justify-start gap-4 mt-3">
                    <img src={fbLogo} alt="fbLogo" />
                    <img src={twLogo} alt="twLogo" />
                    <img src={phonelogo} alt="phonelogo" />
                    <img src={beLogo} alt="beLogo" />
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-300 pb-5">
                <p className="p-5 text-[#8F9BB3] text-base">
                  Contrary to popular belief, Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg">
              <h3 className="text-[#222B45] text-base font-normal p-5">
                Statistics
              </h3>
              <div className="flex items-center justify-center gap-5 border-t border-gray-300 pt-3">
                <div>
                  <p className="text-[#8F9BB3] text-sm">Balance</p>
                  <h3 className="font-bold text-[#222B45] text-2xl">$545</h3>
                </div>
                <div>
                  <p className="text-[#8F9BB3] text-sm">Growth</p>
                  <h3 className="font-bold text-[#222B45] text-2xl">27%</h3>
                </div>
              </div>
              <div className="px-5">
                <ProgressBar progress="77" bg="#00E096" text="Total Income" />
                <ProgressBar progress="45" bg="#FF2D55" text="Total Expenses" />
                <ProgressBar progress="23" bg="#884DFF" text="Gross Profit" />
              </div>
            </div>
          </div>
          <div className="w-full bg-white h-max">
            <h3 className="font-semibold text-[#222B45] text-base p-5">
              Activities
            </h3>
            <div className="border-t border-gray-300 p-5">
              <div className="flex items-center justify-start gap-3 mb-3">
                <div className="w-[42px] h-[42px] bg-[#0095FF] rounded-lg flex items-center justify-center">
                  <AiOutlineCalendar color="#fff" size="24px" />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45]">
                    $29 new sale admin template
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">5 min ago</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mb-3">
                <div className="w-[42px] h-[42px] bg-[#0095FF] rounded-lg flex items-center justify-center">
                  <AiOutlineFile color="#fff" size="24px" />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45]">
                    Project update new HTML page
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">12 min ago</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mb-3">
                <div className="w-[42px] h-[42px] bg-[#0095FF] rounded-lg flex items-center justify-center">
                  <AiOutlineEdit color="#fff" size="24px" />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45]">12 min ago</h3>
                  <p className="text-sm text-[#8F9BB3]">24 min ago</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mb-3">
                <div className="w-[42px] h-[42px] bg-[#0095FF] rounded-lg flex items-center justify-center">
                  <AiOutlineDelete color="#fff" size="24px" />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45]">
                    New user puffin web - view
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">35 min ago</p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 mb-3">
                <div className="w-[42px] h-[42px] bg-[#0095FF] rounded-lg flex items-center justify-center">
                  <AiOutlineDelete color="#fff" size="24px" />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45]">
                    New user puffin web - view
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">1 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:h-full xl:h-screen w-[30%] ">
          <div className="bg-white rounded-lg mt-5 h-full">
            <h3 className="font-semibold text-[#222B45] text-base p-5">
              Friends
            </h3>
            <div className="border-t border-gray-300 py-4">
              <div className="flex items-center justify-start gap-3 p-2 mb-4 border border-gray-300 rounded-lg mx-5 flex-wrap overflow-hidden">
                <div className="w-[32px] h-[32px]">
                  <img
                    src={friendsOne}
                    alt="fbLogo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45] font-semibold">
                    Lucy Fox
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">
                    skiles_burnice@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 p-2 mb-4 border border-gray-300 rounded-lg mx-5 flex-wrap overflow-hidden">
                <div className="w-[32px] h-[32px]">
                  <img
                    src={friendsTwo}
                    alt="fbLogo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45] font-semibold">
                    Cora Medina
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">
                    koch.rudolph@jillian.biz
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 p-2 mb-4 border border-gray-300 rounded-lg mx-5 flex-wrap overflow-hidden">
                <div className="w-[32px] h-[32px]">
                  <img
                    src={friendsThree}
                    alt="fbLogo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45] font-semibold">
                    Calvin Casey
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">
                    melba.koelpin@hegmann.co.uk
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 p-2 mb-4 border border-gray-300 rounded-lg mx-5 flex-wrap overflow-hidden">
                <div className="w-[32px] h-[32px]">
                  <img
                    src={friendFour}
                    alt="fbLogo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45] font-semibold">
                    Luis Clarke
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">
                    koch.rudolph@jillian.biz
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-start gap-3 p-2 mb-4 border border-gray-300 rounded-lg mx-5 flex-wrap overflow-hidden">
                <div className="w-[32px] h-[32px]">
                  <img
                    src={friendsFive}
                    alt="fbLogo"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div>
                  <h3 className="text-base text-[#222B45] font-semibold">
                    Brandon Ellis
                  </h3>
                  <p className="text-sm text-[#8F9BB3]">
                    melba.koelpin@hegmann.co.uk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSce;
