import RevenueChart from "../../components/dashboardChart/RevenueChart";


const Revenue = () => {

    return (
        <div>
            <div className="ml-5 py-4">
                <h6 className="text-[18px] text-heading dark:text-darkHeading font-medium">
                    Revenue
                </h6>
            </div>
            <hr />
            <div className="p-6 pb-0">
                <RevenueChart></RevenueChart>
            </div>
            <div className="flex items-center mt-5 justify-center">
                <h1 className="text-xl font-semibold">12,40,301</h1>
                <button className="btn btn-sm rounded-2xl bg-[#CDE7FF] text-[#0095FF] ml-1">+3.7%</button>
            </div>
            <p className="text-center text-[#8F9BB3] mt-1">Lorem ipsum dolor sit amet.</p>
            <div className="flex items-center justify-center mt-10">
                <button className="btn bg-[#0095FF] hover:bg-[#0095FF] text-white rounded-full w-[150px] mx-2 text-[13px]">Send Report</button>
            </div>
        </div>
    );
};

export default Revenue;