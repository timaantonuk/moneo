import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "../data/data";

const HorizontalChart = () => {
  const [options, setOptions] = useState<AgChartOptions>({
    height: 600,
    title: {
      text: "Apple's Revenue by Product Category",
    },
    subtitle: {
      text: "In Billion U.S. Dollars",
    },
    data: getData(),
    series: [
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "iphone",
        yName: "iPhone",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "mac",
        yName: "Mac",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "ipad",
        yName: "iPad",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "wearables",
        yName: "Wearables",
      },
      {
        type: "bar",
        direction: "horizontal",
        xKey: "quarter",
        yKey: "services",
        yName: "Services",
      },
    ],
  });

  return <AgCharts options={options} />;
};

export default HorizontalChart;