import React from 'react'
import {
  ChartOptions,
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { useTheme } from 'styled-components'

const RegionChart = () => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

  const theme = useTheme()
  const data = {
    labels: ['총력전', 'TFT', '일반', '자유랭크', '랭크'],
    datasets: [
      {
        label: '출몰지역 통계',
        data: [3.4, 4.3, 4, 3.5, 5],
        backgroundColor: 'rgba(277, 255, 58, 0.4)',
        borderColor: theme.green.basic,
        borderWidth: 2,
        pointHoverBorderColor: theme.green.dark,
        pointHoverBackgroundColor: theme.green.dark,
      },
    ],
  }

  const options: ChartOptions<'radar'> = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        titleFont: {
          size: 16,
          family: 'SUIT-Regular',
        },
        bodyFont: {
          size: 14,
          family: 'SUIT-Regular',
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: theme.gray.SF,
          lineWidth: 1,
        },
        grid: {
          color: theme.gray.SF,
          lineWidth: 1,
        },
        pointLabels: {
          color: theme.color.white,
          font: {
            size: 14,
            family: 'SUIT-Regular',
          },
        },
        beginAtZero: true,
        ticks: {
          display: false,
          stepSize: 1,
        },
      },
    },
  }

  return <Radar data={data} options={options} width={400} height={400} />
}

export default RegionChart
