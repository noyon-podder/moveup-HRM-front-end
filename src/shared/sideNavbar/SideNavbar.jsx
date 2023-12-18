import { AiOutlineFire, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BiCalendar, BiUser } from "react-icons/bi";
import { BsClipboard, BsCreditCard2Back } from "react-icons/bs";
import { CiCircleAlert, CiFileOn } from "react-icons/ci";
import { FiSearch, FiSettings } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { TbBrowserPlus } from "react-icons/tb";
import { TiFlashOutline } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

const SideNavbar = () => {
  const usePathname = useLocation();
  const pathname = usePathname?.pathname;

  const navBar = (
    <>
      <div
        className={
          pathname === "/"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="hover:text-[#0095FF] flex items-center gap-2">
            <TbBrowserPlus className="text-lg" />
            Dashboard
          </Link>
          {pathname == "/" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/users"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/users"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <HiOutlineUsers className="text-lg" />
            Users
          </Link>
          {pathname == "/users" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/department"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/department"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <BsClipboard className="text-lg" />
            Departments
          </Link>
          {pathname == "/department" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/employee"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/employee"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <HiOutlineUsers className="text-lg" />
            Employee
          </Link>
          {pathname == "/employee" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/activities"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/activities"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <TiFlashOutline className="text-lg" />
            Activities
          </Link>
          {pathname == "/activities" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/holiday"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/holiday"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <LiaCheckCircleSolid className="text-lg" />
            Holidays
          </Link>
          {pathname == "/holiday" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/events"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/events"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <AiOutlineFire className="text-lg" />
            Events
          </Link>
          {pathname == "/events" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/payroll"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/payroll"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <BsCreditCard2Back className="text-lg" />
            Payroll
          </Link>
          {pathname == "/payroll" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/acounts"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/acounts"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <AiOutlineUser className="text-lg" />
            Accounts
          </Link>
          {pathname == "/acounts" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
      <div
        className={
          pathname === "/report"
            ? "nab_item text-[#0095FF]"
            : "text-[#8F9BB3] nab_item"
        }
      >
        <div className="flex items-center justify-between">
          <Link
            to="/report"
            className="hover:text-[#0095FF] flex items-center gap-2"
          >
            <CiCircleAlert className="text-lg" />
            Report
          </Link>
          {pathname == "/report" && (
            <hr className="w-px h-4 bg-[#0095FF] transform rotate-180 -ml-4" />
          )}
        </div>
      </div>
    </>
  );
  return (
    <div className="grid grid-cols-12 bg-white fixed top-0 left-0 lg:w-[185px]">
      <div className="col-span-3">
        <div className="bg-[#0095FF] py-[25px] min-h-screen h-full flex flex-col items-center justify-between w-[50px]">
          <div>
            <div className="w-[34px] h-[34px]">
              <img src="/public/logo.png" width="100%" alt="" />
            </div>
            <div className="flex flex-col items-center gap-7 mt-9">
              <Link
                to="/search"
                className={
                  pathname == "/search" ? "p-2 bg-blue-500 rounded-lg" : "p-2"
                }
              >
                <FiSearch
                  size="20px"
                  color={pathname == "/search" ? "white" : "#ccd3e0"}
                />
              </Link>

              <Link
                to="/calender"
                className={
                  pathname == "/calender" ? "p-2 bg-blue-500 rounded-lg" : "p-2"
                }
              >
                <BiCalendar
                  size="20px"
                  color={pathname == "/calender" ? "white" : "#ccd3e0"}
                />
              </Link>

              <Link
                to="/contact"
                className={
                  pathname == "/contact" ? "p-2 bg-blue-500 rounded-lg" : "p-2"
                }
              >
                <BiUser
                  size="20px"
                  color={pathname == "/contact" ? "white" : "#ccd3e0"}
                />
              </Link>
              <Link
                to="/messenger"
                className={
                  pathname == "/messenger"
                    ? "p-2 bg-blue-500 rounded-lg"
                    : "p-2"
                }
              >
                <AiOutlineMessage
                  size="20px"
                  color={pathname == "/messenger" ? "white" : "#ccd3e0"}
                />
              </Link>
              <Link
                to="/file-manager"
                className={
                  pathname == "/file-manager"
                    ? "p-2 bg-blue-500 rounded-lg"
                    : "p-2"
                }
              >
                <CiFileOn
                  size="20px"
                  color={pathname == "/file-manager" ? "white" : "#ccd3e0"}
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-7">
            <Link
              to="/settings"
              className={
                pathname == "/settings" ? "p-2 bg-blue-500 rounded-lg" : "p-2"
              }
            >
              <FiSettings
                size="20px"
                color={pathname == "/settings" ? "white" : "#ccd3e0"}
              />
            </Link>

            <Link
              to="/account"
              className={
                pathname == "/account" ? "p-2 bg-blue-500 rounded-lg" : "p-2"
              }
            >
              <img src="/public/avatar.png" alt="" />
            </Link>
            <RiBarChartHorizontalLine size="20px" color="#ccd3e0" />
          </div>
        </div>
      </div>
      <div className="col-span-9 ml-4">
        <div className="bg-white w-[180] py-9 h-screen">
          <div className="w-[70px] h-[18px]">
            <img
              src="/public/moveUpLogo.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="mt-10">
            <div>{navBar}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
