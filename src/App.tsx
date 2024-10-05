import { Link } from 'react-router-dom'
import './App.css'
import { Timeline } from './service/data'

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

function App() {
    const timeline = Timeline
    const birthDay = new Date('03/20/2025')
    const weeksOfPregnancy = 40
    const today = new Date()

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
        <section>
            <div>Sex ca. am {getFullDate(timeOfSex)}</div>
            <div>Geburt ca. am {getFullDate(birthDay)}</div>
            <br />

            <div>
                {timeline.map((trimester, index) => {
                    return (
                        <div key={index}>
                            <h2>
                                <strong>
                                    {index + 1}. Trimester ({trimester.timeline}{' '}
                                    Wochen)
                                </strong>
                            </h2>

                            {trimester.weeks.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{
                                            color: currentWeek(
                                                calculateDate(
                                                    weeksOfPregnancy -
                                                        item.week +
                                                        1
                                                ),

                                                calculateDate(
                                                    weeksOfPregnancy - item.week
                                                )
                                            )
                                                ? '#1fc1fc'
                                                : '#fff',
                                        }}
                                    >
                                        <span>{item.week}. Woche</span>
                                        &nbsp;
                                        <span>
                                            (
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
                                            )
                                        </span>
                                        &nbsp;
                                        <Link to={`/week/${item.week}`}>
                                            Go to Week {item.week}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default App
