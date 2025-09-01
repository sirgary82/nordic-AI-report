import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const ChartComponent = ({ type, data, options }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            chartInstance.current = new Chart(chartRef.current, {
                type: type,
                data: data,
                options: options,
            });
        }
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, data, options]);
    return _jsx("canvas", { ref: chartRef });
};
export default ChartComponent;
//# sourceMappingURL=Chart.js.map