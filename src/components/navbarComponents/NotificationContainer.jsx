import { AiFillLike } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const NotificationContainer = () => {
  return (
    <div className="w-[338px] bg-white rounded-lg px-4 shadow-lg messageContainer relative mt-3">
      {/* 1st notification */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <BsCheckCircleFill color="#C5CEE0" size={20} />
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              Issue Fixed
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">
              We have fix all design bug ...
            </p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">23 min ago</p>
      </div>

      {/* 2nd notification */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <FaUserAlt color="#C5CEE0" size={20} />
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              New User
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">
              I feel great! Thanks team.
            </p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">1 hour ago</p>
      </div>

      {/* 3rd notification */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <AiFillLike color="#C5CEE0" size={20} />
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              7 New Feedback
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">
              It will give a smart finishing ...
            </p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">2 days ago</p>
      </div>

      {/* 4th notification */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <MdError color="#C5CEE0" size={20} />
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              Server Warning
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">
              Your connection is not private
            </p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">5 days ago</p>
      </div>

      {/* 5th notification */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <FaShoppingCart color="#C5CEE0" size={20} />
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              5 New Orders
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">
              You received a new order fro...
            </p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">3 days ago</p>
      </div>

      <div className="text-center py-3">
        <Link className="text-[#8F9BB3] text-xs font-normal ">
          Mark all as read
        </Link>
      </div>
    </div>
  );
};

export default NotificationContainer;
