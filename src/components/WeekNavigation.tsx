import { Link } from 'react-router-dom'
import { Progress } from './ui/progress'
import Card from './Card'

const WeekNavigation = ({
    week,
    weeksOfPregnancy,
}: {
    week: number
    weeksOfPregnancy: number
}) => {
    const progress = (week * 100) / weeksOfPregnancy

    return (
        <Card heading={`${week}. Woche`}>
            <Progress value={progress} className="bg-white" />

            {week && (
                <div className="flex flex-row items-center justify-between pt-4 w-full">
                    <div className="flex basis-1/5 justify-center">
                        {week >= 3 && (
                            <Link
                                to={`/week/2`}
                                className="flex mx-2 w-[33px] justify-center p-1 bg-green-700/40 text-white rounded-xl"
                            >
                                <strong>2</strong>
                            </Link>
                        )}
                    </div>

                    <div className="flex basis-1/5 justify-center">
                        {week >= 4 && (
                            <Link
                                to={`/week/${week - 1}`}
                                className="flex mx-2 w-[33px] justify-center p-1 bg-green-700/40 text-white rounded-xl"
                            >
                                <strong>{week - 1}</strong>
                            </Link>
                        )}
                    </div>

                    <div className="flex basis-1/5 justify-center">
                        <strong className="text-green-700">{week}</strong>
                    </div>

                    <div className="flex basis-1/5 justify-center">
                        {week <= weeksOfPregnancy - 2 && (
                            <Link
                                to={`/week/${week + 1}`}
                                className="flex mx-2 w-[33px] justify-center p-1 bg-green-700/40 text-white rounded-xl"
                            >
                                <strong>{week + 1}</strong>
                            </Link>
                        )}
                    </div>

                    <div className="flex basis-1/5 justify-center">
                        {week <= weeksOfPregnancy - 1 && (
                            <Link
                                to={`/week/${weeksOfPregnancy}`}
                                className="flex mx-2 w-[35px] justify-center p-1 bg-green-700/40 text-white rounded-xl"
                            >
                                <strong>{weeksOfPregnancy}</strong>
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </Card>
    )
}

export default WeekNavigation
