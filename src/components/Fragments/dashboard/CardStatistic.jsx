import { expensesStatistics } from "../../../data/expenses";
import Card from "../../Elements/Card";
import BarsDataset from "../../Elements/BarChart";

const CardStatistic = () => {
  return (
    <Card
      variant="md:col-span-2 min-h-max"
      title="Statistics"
      desc={
        <div className="h-72">
          <select className="font-bold text-lg ring-0 focus:outline-none bg-transparent">
            <option value="">weekly comparison</option>
          </select>
          <BarsDataset desc={expensesStatistics} />
        </div>
      }
    />
  );
};

export default CardStatistic;
