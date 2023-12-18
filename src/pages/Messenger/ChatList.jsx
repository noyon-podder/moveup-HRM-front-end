import { AiOutlinePlus, AiOutlineSetting } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import { PiAtThin, PiRepeatThin } from "react-icons/pi";
import message from "../../assets/mess/message.png";
import Oval2 from "../../assets/mess/pro1.png";
import Oval1 from "../../assets/mess/pro2.png";

const ChatList = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 mt-5">
      <div className="flex items-center justify-between p-5">
        <div>
          <h2 className="text-base text-[#222B45] font-semibold">
            Friends Group
          </h2>
          <p className="text-[#8F9BB3] text-sm">Last seen : 2 hours ago</p>
        </div>
        <div className="flex gap-5 items-center justify-start">
          <AiOutlinePlus className="text-[#222B45] text-2xl cursor-pointer" />
          <AiOutlineSetting className="text-[#222B45] text-2xl cursor-pointer" />
          <PiRepeatThin className="text-[#222B45] text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
      <div className="flex justify-start items-center gap-2 px-5 py-10">
        <div>
          <img src={Oval1} alt="OvalCopy6" />
        </div>
        <div>
          <h2 className="bg-[#E4E9F2] px-3 py-2 rounded-full text-sm text-[#222B45]">
            Guys, are we meeting today?
          </h2>
          <p className="text-sm text-[#8F9BB3]">10 : 15 AM, Today</p>
        </div>
      </div>
      <div className="flex justify-start items-end gap-2 px-5 mb-7">
        <div>
          <img src={Oval2} alt="OvalCopy6" />
        </div>
        <div>
          <h2 className="bg-[#E4E9F2] px-3 py-2 rounded-full text-sm text-[#222B45] max-w-[485px] mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <h2 className="bg-[#E4E9F2] px-3 py-2 rounded-full text-sm text-[#222B45] w-max ">
            Contrary to popular belief
          </h2>
          <p className="text-sm text-[#8F9BB3]">10 : 35 AM, Today</p>
        </div>
      </div>
      <div className="px-10 flex items-end justify-end flex-col">
        <div className="">
          <img src={message} alt="message" />
        </div>
        <h2 className="bg-[#0095FF] px-5 py-2 rounded-full text-sm text-white w-max mt-3">
          Contrary to popular belief
        </h2>
        <h2 className="bg-[#0095FF] px-5 py-2 rounded-full text-sm text-white max-w-[485px] mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        <p className="text-sm text-[#8F9BB3] mt-1">10 : 35 AM, Today</p>
      </div>
      <div className="px-5">
        <p className="text-sm text-[#8F9BB3]">Somebody is typing...</p>
      </div>
      <div className="border-t border-gray-200 pb-2 mt-3"></div>
      <div className="mx-5 mb-5 flex items-center justify-between bg-[#F9FBFD] p-4 rounded-lg">
        <div>
          <input
            type="text"
            placeholder="Write a messages..."
            className="outline-none border-n bg-transparent xl:w-[700px]"
          />
        </div>
        <div className="flex items-center justify-start gap-4">
          <PiAtThin className="text-[#8F9BB3] text-2xl cursor-pointer" />
          <BsEmojiSmile className="text-[#8F9BB3] text-2xl cursor-pointer" />
          <IoMdAttach className="text-[#8F9BB3] text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
