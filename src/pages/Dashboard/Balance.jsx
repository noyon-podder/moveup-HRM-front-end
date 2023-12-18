
import BalanceChart from '../../components/dashboardChart/BalanceChart';


const Balance = () => {
    return (
        <div>
            <div className="ml-5 py-4">
                <h6 className="text-[18px] text-heading dark:text-darkHeading font-medium">
                    My Balance
                </h6>
            </div>
            <hr />
            <h6 className="font-medium text-gray-400 ml-5 mt-5">
                    Balance
                </h6>
                <h2 className="text-3xl ml-5">$ 15,108</h2>
            <div>
                <BalanceChart></BalanceChart>
            </div>
        </div>
    );
};

export default Balance;