import { useState } from "react";
import { AgCharts } from "ag-charts-react";
import { AgChartOptions } from "ag-charts-community";
import { getData } from '../data/GDPperCapita'

const LineChartElem = () => {
    const [options, setOptions] = useState<AgChartOptions>({
        title: {
            text: "Sales by Month",
            color: 'white'
        },
        data: getData(),
        background: {
            visible: false,
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
                type: "area",
                xKey: "month",
                yKey: "subscriptions",
                yName: "Subscriptions",
                stacked: true,
            },
            {
                type: "area",
                xKey: "month",
                yKey: "services",
                yName: "Services",
                stacked: true,
            },
            {
                type: "area",
                xKey: "month",
                yKey: "products",
                yName: "Products",
                stacked: true,
            },
        ],
    });

    return <AgCharts options={options} />;
};

export default LineChartElem;