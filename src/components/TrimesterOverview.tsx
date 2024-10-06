import { Timeline } from '@/service/data'
import { Link } from 'react-router-dom'

const months = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
]

const TrimesterOverview = () => {
    const timeline = Timeline
    const weeksOfPregnancy: number = 41
    const birthDay: Date = new Date('03/20/2025')
    const today: Date = new Date()

    const calculateDate = (week: number) => {
        return new Date(birthDay.getTime() - week * 7 * 24 * 60 * 60 * 1000)
    }

    const timeOfSex = calculateDate(weeksOfPregnancy)

    const getFullDate = (date: any) => {
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`
    }

    const currentWeek = (startDate: any, endDate: any) => {
        return today > startDate && today < endDate
    }

    return (
        <section className="flex flex-col py-2 w-80">
            <div className="card flex flex-col items-center w-full">
                <div>Geburt am {getFullDate(birthDay)}</div>
                <div>Start am {getFullDate(timeOfSex)}</div>
            </div>

            {timeline.map((trimester: any, index: number) => {
                return (
                    <div className="card" key={index}>
                        <h2>
                            <strong>
                                {index + 1}. Trimester (Woche{' '}
                                {trimester.timeline})
                            </strong>
                        </h2>

                        {trimester.weeks.map((item: any, index: number) => {
                            return (
                                <div
                                    key={index}
                                    style={{
                                        color: currentWeek(
                                            calculateDate(
                                                weeksOfPregnancy - item.week + 1
                                            ),

                                            calculateDate(
                                                weeksOfPregnancy - item.week
                                            )
                                        )
                                            ? '#1fc1fc'
                                            : '',
                                    }}
                                >
                                    <Link to={`/week/${item.week}`}>
                                        <strong className="text-white">
                                            {item.week}. Woche
                                        </strong>
                                        <br />

                                        <span className="text-sm text-blue-400">
                                            {getFullDate(
                                                calculateDate(
                                                    weeksOfPregnancy -
                                                        item.week +
                                                        1
                                                )
                                            )}{' '}
                                            -{' '}
                                            {getFullDate(
                                                calculateDate(
                                                    weeksOfPregnancy - item.week
                                                )
                                            )}
                                        </span>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}

export default TrimesterOverview
