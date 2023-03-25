import Chart from "./chart/Chart";
import Heatmap from "./heatmap/Heatmap";
import Questions from "./questions/Questions";
import Scatter from "./scatter/Scatter";

const Main = () => {
  return (
    <div>
      <div>main subject : Coin Price</div>
      <Questions />
      <Chart />
      <Heatmap />
      <Scatter />
    </div>
  );
};

export default Main;
