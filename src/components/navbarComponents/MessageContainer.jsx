import { Link } from "react-router-dom";
import person1 from "../../assets/navBar/message1.png";
import person2 from "../../assets/navBar/message2.png";
import person3 from "../../assets/navBar/message3.png";
import "./MessageContainer.css";
const MessageContainer = () => {
  return (
    <div className="w-[338px] bg-white rounded-lg px-4 shadow-lg messageContainer relative mt-3">
      {/* 1st message */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <img
              src={person3}
              alt=""
              className="w-[36px] h-[36px] rounded-full"
            />
            <div className="w-[7px] h-[7px] bg-[#0095FF] rounded-full absolute bottom-2 right-[2px]"></div>
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              Jermin Wade
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">
              Okay, lets me check this.
            </p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">23 min ago</p>
      </div>

      {/* 2nd message */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <img
              src={person2}
              alt=""
              className="w-[36px] h-[36px] rounded-full"
            />
            <div className="w-[7px] h-[7px] bg-[#0095FF] rounded-full absolute bottom-2 right-[2px]"></div>
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              Dorothy Gonzales
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">
              Ok, thanks you;
            </p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">1 hour ago</p>
      </div>

      {/* 3rd message */}
      <div className="flex justify-between border-b border-[#EFF4FA] py-[15px]">
        <div className="flex items-center gap-[10px]">
          <div className="relative">
            <img
              src={person1}
              alt=""
              className="w-[36px] h-[36px] rounded-full"
            />
            <div className="w-[7px] h-[7px] bg-[#0095FF] rounded-full absolute bottom-2 right-[2px]"></div>
          </div>

          <div>
            <h3 className="text-[#222B45] text-[13px] font-semibold">
              Noah Medina
            </h3>
            <p className="text-[#8F9BB3] text-xs font-normal">Done</p>
          </div>
        </div>
        <p className="text-[#8F9BB3] text-xs font-normal">2 days ago</p>
      </div>

      <div className="text-center py-3">
        <Link className="text-[#8F9BB3] text-xs font-normal ">
          Mark all as read
        </Link>
      </div>
    </div>
  );
};

export default MessageContainer;
