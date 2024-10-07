import { Timeline } from '@/service/data'
import { Link } from 'react-router-dom'

const months: string[] = [
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

const Schedule = () => {
    const timeline = Timeline

    const weeksOfPregnancy: number = 41
    const birthDay: Date = new Date('03/20/2025')
    const today: Date = new Date()

    const calculateDate = (week: number) => {
        return new Date(birthDay.getTime() - week * 7 * 24 * 60 * 60 * 1000)
    }

    const startDate = calculateDate(weeksOfPregnancy)

    const getFullDate = (date: any) => {
        return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`
    }

    const currentWeek = (startDate: any, endDate: any) => {
        return today > startDate && today < endDate
    }

    return (
        <>
            <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                <h2 className="text-xl text-blue-500 pb-2">Zeitplan</h2>

                <p className="text-sm">Start ca. {getFullDate(startDate)}</p>

                <p className="text-sm">Geburt ca. {getFullDate(birthDay)}</p>
            </div>

            {timeline.map((trimester: any, index: number) => {
                return (
                    <div
                        className="flex flex-col rounded-lg bg-white/70 my-4 p-4"
                        key={index}
                    >
                        <h2 className="text-xl text-blue-500 pb-2">
                            {index + 1}. Trimester (Woche {trimester.timeline})
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

                                        <span className="text-sm text-blue-500">
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
        </>
    )
}

export default Schedule
