import React, { useEffect, useRef } from 'react';
import { Chart, registerables, type ChartType, type ChartData, type ChartOptions, type ChartTypeRegistry } from 'chart.js';

Chart.register(...registerables);

interface ChartProps<TType extends ChartType = ChartType> {
    type: TType;
    data: ChartData<TType>;
    options?: ChartOptions<TType>;
}

const ChartComponent = <TType extends ChartType = ChartType>({ type, data, options }: ChartProps<TType>) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            const defaultOptionsRaw = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#ffffff' } },
                    title: { color: '#ffffff' },
                },
                // Scales are ignored by non-cartesian charts (e.g., doughnut)
                scales: {
                    x: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255,255,255,0.2)' } },
                    y: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255,255,255,0.2)' } },
                },
            } as const;

            const defaultOptions = defaultOptionsRaw as ChartOptions<keyof ChartTypeRegistry>;
            const mergedOptions = Object.assign({}, defaultOptions, options ?? {}) as ChartOptions<keyof ChartTypeRegistry>;

            chartInstance.current = new Chart(chartRef.current, {
                type: type as keyof ChartTypeRegistry,
                data: data as ChartData<keyof ChartTypeRegistry>,
                options: mergedOptions,
            });
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, data, options]);

    return <canvas ref={chartRef} />;
};

export default ChartComponent;
