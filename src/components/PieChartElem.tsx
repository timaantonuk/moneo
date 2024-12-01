import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from "../data/webUsageStats.ts";

const PieChartElem = () => {
    const [options, setOptions] = useState<AgChartOptions>({
        data: getData(),
        background: {
            visible: false,
        },
        title: {
            text: "Portfolio Composition",
            color: 'white'
        },
        legend: {
          item: {
              label: {
                  color: 'white'
              }
          }
        },
        series: [
            {
                type: "pie",
                angleKey: "amount",
                legendItemKey: "asset",
            },
        ],


    });

    return <AgCharts options={options} />;
};

export default PieChartElem