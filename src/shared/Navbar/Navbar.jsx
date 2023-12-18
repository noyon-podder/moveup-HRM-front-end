import { FaEnvelope, FaUserAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";

import english from "../../assets/navBar/english.png";
import spain from "../../assets/navBar/spain.png";
import japan from "../../assets/navBar/japan.png";
import france from "../../assets/navBar/france.png";
import excel from "../../assets/navBar/excel.png";
import word from "../../assets/navBar/word.png";
import pdf from "../../assets/navBar/pdf.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import MessageContainer from "../../components/navbarComponents/MessageContainer";
import NotificationContainer from "../../components/navbarComponents/NotificationContainer";

const Navbar = () => {

  const path = useLocation();
const pathName = path.pathname;
const parts = pathName.split('/');
const lastPart = parts[parts.length - 1];

  const [showLanguage, setShowLanguage] = useState(false);
  const [showReports, setShowReports] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleLanguageShow = () => {
    setShowLanguage(!showLanguage);
    setShowReports(false);
    setShowProjects(false);
    setShowMessage(false);
    setShowNotification(false);
  };
  const handleReportShow = () => {
    setShowReports(!showReports);
    setShowLanguage(false);
    setShowProjects(false);
    setShowMessage(false);
    setShowNotification(false);
  };

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
    setShowLanguage(false);
    setShowReports(false);
    setShowMessage(false);
    setShowNotification(false);
  };

  const handleShowMessage = () => {
    setShowMessage(!showMessage);
    setShowLanguage(false);
    setShowReports(false);
    setShowProjects(false);
    setShowNotification(false);
  };

  const handleShowNotification = () => {
    setShowNotification(!showNotification);
    setShowMessage(false);
    setShowLanguage(false);
    setShowReports(false);
    setShowProjects(false);
  };
  return (
    <div className="mt-[25px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center lg:gap-x-[20px] xl:gap-x-[45px] ">
          {
            pathName == '/' ?
            <h1 className="text-[#222B45] text-[20px] font-normal">Dashboard</h1>
            :
            <h1 className="text-[#222B45] text-[20px] font-normal capitalize">{lastPart}</h1>
          }
          <div className="flex items-center xl:gap-[15px] lg:gap-[10px]">
            <input
              type="number"
              placeholder="Year"
              className="w-[92px] h-[34px] border border-[#EFF4FA] bg-[#fff] placeholder-[#222B45] px-3 text-[13px] font-normal outline-none rounded-lg"
            />

            <div className=" relative">
              <input
                type="text"
                placeholder="Search..."
                className="lg:w-[200px] xl:w-[274px]  h-[34px] placeholder-[#222B45] text-[13px] font-normal outline-none bg-white border border-[#EFF4FA] px-[12px] rounded-lg"
              />
              <FiSearch className="absolute right-2 top-[10px] text-[#C5CEE0] " />
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center ">
            <div className="flex items-center">
              {/* language */}

              <div className="relative xl:mr-[35px] lg:mr-4">
                <p
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleLanguageShow()}
                >
                  Language <AiOutlineCaretDown size={12} color="#C5CEE0" />
                </p>
                {showLanguage && (
                  <ul className="absolute top-full left-0 mt-2  shadow-lg  py-3 dropdown-content z-[1] bg-white rounded-lg w-[162px]">
                    <li className="hover:border-b border-[#EFF4FA] py-2 border-b px-3">
                      <Link className="flex gap-[10px] items-center">
                        <img src={english} alt="" className="w-[29px]" />{" "}
                        <span className="text-[#222B45] text-xs font-normal">
                          English
                        </span>
                      </Link>
                    </li>

                    <li className="hover:border-b border-[#EFF4FA] py-2 px-3">
                      <Link className="flex gap-[10px] items-center">
                        <img src={spain} alt="" className="w-[29px]" />{" "}
                        <span className="text-[#222B45] text-xs font-normal">
                          Spanish
                        </span>
                      </Link>
                    </li>

                    <li className="hover:border-b border-[#EFF4FA] py-2 px-3">
                      <Link className="flex gap-[10px] items-center">
                        <img src={japan} alt="" className="w-[29px]" />{" "}
                        <span className="text-[#222B45] text-xs font-normal">
                          Japanese
                        </span>
                      </Link>
                    </li>

                    <li className="hover:border-b border-[#EFF4FA] py-2 px-3">
                      <Link className="flex gap-[10px] items-center">
                        <img src={france} alt="" className="w-[29px]" />{" "}
                        <span className="text-[#222B45] text-xs font-normal">
                          France
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* reports  */}
              <div className="relative xl:mr-[35px] mr-4">
                <p
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleReportShow()}
                >
                  Reports <AiOutlineCaretDown size={12} color="#C5CEE0" />
                </p>
                {showReports && (
                  <ul className="absolute top-full left-0 mt-2 p-2 shadow-lg px-3 py-3 dropdown-content z-[1] bg-white rounded-lg w-[162px]">
                    <li className="hover:border-b border-[#EFF4FA] py-2">
                      <Link className="flex gap-[10px] items-center">
                        <img src={excel} alt="" className="w-[29px]" />{" "}
                        <span className="text-[#222B45] text-xs font-normal">
                          Excel
                        </span>
                      </Link>
                    </li>

                    <li className="hover:border-b border-[#EFF4FA] py-2">
                      <Link className="flex gap-[10px] items-center">
                        <img src={word} alt="" className="w-[29px]" />{" "}
                        <span className="text-[#222B45] text-xs font-normal">
                          Word
                        </span>
                      </Link>
                    </li>

                    <li className="hover:border-b border-[#EFF4FA] py-2">
                      <Link className="flex gap-[10px] items-center">
                        <img src={pdf} alt="" className="w-[29px]" />{" "}
                        <span className="text-[#222B45] text-xs font-normal">
                          PDF
                        </span>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              {/* project */}
              <div className="relative xl:mr-[35px] mr-4">
                <p
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleShowProjects()}
                >
                  Projects <AiOutlineCaretDown size={12} color="#C5CEE0" />
                </p>
                {showProjects && (
                  <ul className="absolute top-full left-0 mt-2 p-2 shadow-lg py-[14px] dropdown-content z-[1] bg-white rounded-lg w-[162px]">
                    <li className=" py-1 px-[10px]">
                      <Link className="text-[#222B45] text-sm font-normal capitalize">
                        Graphic Design
                      </Link>
                    </li>
                    <li className=" py-1 px-[10px]">
                      <Link className="text-[#222B45] text-sm font-normal capitalize">
                        Angular Admin
                      </Link>
                    </li>
                    <li className=" py-1 px-[10px]">
                      <Link className="text-[#222B45] text-sm font-normal capitalize">
                        PSD to HTML
                      </Link>
                    </li>
                    <li className=" pb-2 py-1 px-[10px] border-b border-[#EFF4FA]">
                      <Link className="text-[#222B45] text-sm font-normal capitalize">
                        App Development
                      </Link>
                    </li>
                    <li className="  py-1 px-[10px] mt-1">
                      <Link className="text-[#222B45] text-sm font-normal capitalize">
                        Home Development
                      </Link>
                    </li>
                    <li className=" py-1 px-[10px] ">
                      <Link className="text-[#222B45] text-sm font-normal capitalize">
                        New Blog Post
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </div>

            <div className="flex items-center ">
              <div
                className="relative w-max cursor-pointer xl:mr-[30px] mr-3"
                onClick={() => handleShowMessage()}
              >
                <FaEnvelope className="text-lg text-[#231F20] " />
                <div className="w-[8px] h-[8px] bg-[#0095FF] rounded-full absolute top-[-2px] right-[-3px]"></div>

                <div className="absolute top-full right-[-15px] z-50">
                  {showMessage && <MessageContainer />}
                </div>
              </div>

              <div
                className="relative w-max cursor-pointer xl:mr-[30px] mr-3"
                onClick={() => handleShowNotification()}
              >
                <IoMdNotifications className="text-xl text-[#231F20]" />
                <div className="w-[8px] h-[8px] bg-[#0095FF] rounded-full absolute top-[0px] right-[0px]"></div>

                <div className="absolute top-full right-[-15px] z-50">
                  {showNotification && <NotificationContainer />}
                </div>
              </div>

              <div className=" w-max mr-0">
                <FaUserAlt className="text-lg text-[#231F20]" />
              </div>
            </div>
          </div>
        </div>
      </div>
            <hr className="mt-10" />
    </div>
  );
};

export default Navbar;