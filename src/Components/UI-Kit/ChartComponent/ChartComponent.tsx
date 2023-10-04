import React, { useEffect, useRef } from 'react';
import Chart, {ChartType} from 'chart.js/auto';

type ValidChartType = ChartType;

interface ChartProps {
  data: number[];
  labels: string[];
  graphique: ValidChartType;
  colors: string[];
  borderColor: string;
}

const ChartComponent: React.FC<ChartProps> = ({ data, labels, graphique, colors, borderColor }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);
  
  const isDisplaybar = () => {
    if (graphique === "pie" ) {
      return false
    }else{
      return true
    }
  }

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: graphique,
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Données',
                data: data,
                backgroundColor: colors,
                borderColor: borderColor,
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              x: {
                display: isDisplaybar(),
              },
              y: {
                display: isDisplaybar(),
              },
            },
          },
        });
      }
    }
  }, [data, labels, colors, graphique]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default ChartComponent;
