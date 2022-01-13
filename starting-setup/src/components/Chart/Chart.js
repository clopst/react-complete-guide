import { ChartBar } from './ChartBar';
import './Chart.css';

export const Chart = (props) => {
  const { dataPoints } = props;

  const dataPointsValue = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
