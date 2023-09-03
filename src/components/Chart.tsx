import { ChartOptions, Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { styled, useTheme } from 'styled-components'
import { ChartProps } from '../interfaces/UserInfoTypes'

const Chart = ({ chartData, label }: ChartProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend)

  const LabelArr = Object.keys(chartData)
  const dataArr = Object.values(chartData)

  const theme = useTheme()
  const data = {
    labels: LabelArr && LabelArr,
    datasets: [
      {
        label,
        data: dataArr && dataArr,
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

  return (
    <div>
      {dataArr.every((value) => !value) ? (
        <NoneDataDiv>
          <h3>{'등록된 통계 데이터가 없습니다.'}</h3>
        </NoneDataDiv>
      ) : (
        <StyledChart data={data} options={options} width={400} height={400} />
      )}
    </div>
  )
}

export default Chart

const NoneDataDiv = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledChart = styled(Doughnut)`
  height: 350px;
`
