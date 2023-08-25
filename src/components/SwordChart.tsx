import React from 'react'
import { ChartOptions, Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useTheme } from 'styled-components'

const SwordChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const theme = useTheme()
  const data = {
    labels: ['패드립', '기타', '성희롱', '인신공격', '혐오성 발언', '쌍욕'],
    datasets: [
      {
        label: '욕 통계',
        data: [8, 8, 8, 8, 16, 16],
        backgroundColor: [
          theme.green.basic,
          theme.gray.DE,
          theme.green.neon,
          theme.color.yellow,
          theme.color.blue,
          theme.color.orange,
        ],
        borderColor: [
          theme.green.basic,
          theme.gray.DE,
          theme.green.neon,
          theme.color.yellow,
          theme.color.blue,
          theme.color.orange,
        ],
        borderWidth: 1,
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    cutout: '60%',
    plugins: {
      legend: {
        display: true,
        position: 'left',
        labels: {
          boxWidth: 5,
          boxHeight: 20,
          font: {
            size: 14,
            family: 'SUIT-Regular',
          },
          color: theme.color.white,
        },
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
  }

  return <Doughnut data={data} options={options} width={400} height={400} />
}

export default SwordChart
