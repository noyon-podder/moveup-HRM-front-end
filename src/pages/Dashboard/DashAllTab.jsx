
import { LuUsers2 } from 'react-icons/lu';
import { PiBagBold } from 'react-icons/pi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { FiPieChart } from 'react-icons/fi';
import { FaListUl } from 'react-icons/fa';

const DashAllTab = () => {
    return (
        <div className="grid lg:grid-cols-6 mt-[30px]">
            
            <div className="bg-white lg:py-[24px] lg:px-[22px] rounded-xl border border-gray-300">
                <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
                    <div className="flex flex-col gap-[5px] w-[178px] text-center items-center text-[#8F9BB3]">
                        <LuUsers2 size={32}></LuUsers2>
                        <h1>
                            Users
                        </h1>
                    </div>
                </div>
            </div>

            
            <div className="bg-white py-[24px] px-[22px] rounded-xl ml-[15px] border border-gray-300">
                <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
                    <div className="flex flex-col gap-[5px] w-[178px] text-center items-center text-[#8F9BB3]">
                        <PiBagBold size={32}></PiBagBold>
                        <h1>
                            Holidays
                        </h1>
                    </div>
                </div>
            </div>

            
            <div className="bg-white lg:py-[24px] lg:px-[22px] rounded-xl ml-[15px] border border-gray-300">
                <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
                    <div className="flex flex-col gap-[5px] w-[178px] text-center items-center text-[#8F9BB3]">
                        <AiOutlineCalendar size={32}></AiOutlineCalendar>
                        <h1>
                            Events
                        </h1>
                    </div>
                </div>
            </div>

            
            <div className="bg-white py-[24px] px-[22px] rounded-xl ml-[15px] border border-gray-300">
                <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
                    <div className="flex flex-col gap-[5px] w-[178px] text-center items-center text-[#8F9BB3]">
                        <MdPayment size={32}></MdPayment>
                        <h1>
                            Payroll
                        </h1>
                    </div>
                </div>
            </div>


            <div className="bg-white py-[24px] px-[22px] rounded-xl ml-[15px] border border-gray-300">
                <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
                    <div className="flex flex-col gap-[5px] w-[178px] text-center items-center text-[#8F9BB3]">
                            <FaListUl size={32}></FaListUl>
                        <h1>
                            684
                        </h1>
                    </div>
                </div>
            </div>

            <div className="bg-white py-[24px] px-[22px] rounded-2xl ml-[15px] border border-gray-300">
                <div className="flex items-center gap-[15px] justify-between lg:justify-normal w-full">
                    <div className="flex flex-col gap-[5px] w-[136px] text-center items-center text-[#8F9BB3]">
                        <FiPieChart size={32}></FiPieChart>
                        <h1>
                            Report
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashAllTab;