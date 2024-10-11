import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

const options = {
    responsive: true,
    interaction: {
        mode: 'index' as const,
        intersect: false,
    },
    stacked: false,
    plugins: {
        title: {
            display: false,
        },
    },
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineChart = ({
    minWeights,
    maxWeights,
}: {
    minWeights: number[]
    maxWeights: number[]
}) => {
    const data = {
        labels: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
            37, 38, 39, 40, 41,
        ],

        datasets: [
            {
                label: 'Min.',
                data: minWeights,
                borderColor: 'rgba(255, 255, 255, 0.7)',
                backgroundColor: '#81BECE',
            },
            {
                label: 'Max.',
                data: maxWeights,
                borderColor: 'rgba(255, 255, 255, 0.7)',
                backgroundColor: '#378BA4',
            },
        ],
    }

    return <Line options={options} data={data} />
}

export default LineChart
