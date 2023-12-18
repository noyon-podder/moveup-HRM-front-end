import { useState } from "react";
import ReportExpences from "./ReportExpences";
import ReportInvoices from "./ReportInvoices";
import ReportDetails from "./ReportDetails";


const Report = () => {

    const [isPage, setIsPage] = useState(1);

    return (
        <div>
            {
                isPage == 1 ?
                    <div className="grid grid-cols-11 gap-10 relative mt-[-4px]">
                        <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
                    </div>
                    :
                    isPage == 2 ?
                        <div className="grid grid-cols-11 gap-7 relative mt-[-4px] ml-[90px]">
                            <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
                        </div>
                        :
                        <div className="grid grid-cols-11 gap-5 relative mt-[-4px] ml-[190px]">
                            <div className=" h-1 bg-[#0095FF] rounded-md w-full"></div>
                        </div>
            }

            <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-[35px]">
                    {
                        isPage == 1 ?
                            <button onClick={() => setIsPage(1)}>Expences</button>
                            :
                            <button className="text-[#8F9BB3]" onClick={() => setIsPage(1)}>Expences</button>
                    }
                    {
                        isPage == 2 ?
                            <button onClick={() => setIsPage(2)}>Invoices</button>
                            :
                            <button className="text-[#8F9BB3]" onClick={() => setIsPage(2)}>Invoices</button>
                    }
                    {
                        isPage == 3 ?
                            <button onClick={() => setIsPage(3)}>Details</button>
                            :
                            <button className="text-[#8F9BB3]" onClick={() => setIsPage(3)}>Details</button>
                    }

                </div>
                <div>
                    <button className=" btn bg-[#00E096] hover:bg-[#00E096] rounded-lg border text-white">Add New</button>
                </div>
            </div>

            {
                isPage == 1 ?
                    <ReportExpences></ReportExpences>
                    :
                    isPage == 2 ?
                        <ReportInvoices></ReportInvoices>
                        :
                        <ReportDetails></ReportDetails>
            }


        </div>
    );
};

export default Report;