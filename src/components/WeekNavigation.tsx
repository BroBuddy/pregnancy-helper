import { Link } from 'react-router-dom'
import { Progress } from './ui/progress'

const WeekNavigation = ({
    week,
    weeksOfPregnancy,
}: {
    week: number
    weeksOfPregnancy: number
}) => {
    const progress = (week * 100) / weeksOfPregnancy

    return (
        <div className="card flex flex-col items-center w-full">
            <Progress value={progress} className="bg-white" />

            {week && (
                <div className="flex flex-row items-center w-full">
                    <span className="flex-none">
                        {Number(week) - 1 >= 1 && (
                            <Link to={`/week/${week - 1}`}>
                                <span className="flex text-blue-500 pt-2">
                                    {Number(week) - 1}.
                                </span>
                            </Link>
                        )}
                    </span>

                    <h2 className="grow mt-5">{week}. Woche</h2>

                    <span className="flex-none">
                        {Number(week) + 1 <= weeksOfPregnancy && (
                            <Link to={`/week/${week + 1}`}>
                                <span className="flex text-blue-500 pt-2">
                                    {Number(week) + 1}.
                                </span>
                            </Link>
                        )}
                    </span>
                </div>
            )}
        </div>
    )
}

export default WeekNavigation
