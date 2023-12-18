/* eslint-disable react/no-unescaped-entities */

import PerfomancePercentage from "../../components/dashboardChart/PerfomancePercentage";


const Performance = () => {
    return (
        <div>
            <div className="ml-5 py-4">
                <h6 className="text-[18px] text-heading dark:text-darkHeading font-medium">
                    Performence
                </h6>
            </div>
            <hr />
            <p className="ml-2 mt-5 mx-2">Measure how fast you're growing monthly recurring revenue. <span className="text-sky-500">Learn More</span></p>

            <div className="px-1 mb-5 mt-[30px] border-2 mx-[10px]">
                <PerfomancePercentage progress={35}
                    text={"Design Team"}
                    bg="#FF2D55">
                </PerfomancePercentage>
                <PerfomancePercentage progress={25}
                    text={"Developer Team"}
                    bg="#00E096">
                </PerfomancePercentage>
                <PerfomancePercentage progress={15}
                    text={"Marketing Team"}
                    bg="#0095FF">
                </PerfomancePercentage>
                <PerfomancePercentage progress={20}
                    text={"Management"}
                    bg="#884DFF">
                </PerfomancePercentage>
                <PerfomancePercentage progress={11}
                    text={"Others"}
                    bg="#FF9D2B">
                </PerfomancePercentage>
            </div>
        </div>
    );
};

export default Performance;