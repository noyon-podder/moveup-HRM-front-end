import GrouthChart from "../../components/dashboardChart/GrouthChart";


const Grouth = () => {
    return (
        <div>
            <div className="ml-5 py-4">
                <h6 className="text-[18px] text-heading dark:text-darkHeading font-medium">
                   Grouth
                </h6>
            </div>
            <hr />
            <div className="mt-24">
                <GrouthChart></GrouthChart>
            </div>
        </div>
    );
};

export default Grouth;