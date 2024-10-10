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
        <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
            <Progress value={progress} className="bg-white" />

            {week && (
                <div className="flex flex-row items-center w-full">
                    <span className="flex-none mt-3">
                        {Number(week) - 1 >= 1 && (
                            <Link to={`/week/${week - 1}`}>
                                <img
                                    src={`/size/${week - 1}.svg`}
                                    alt=""
                                    width="30"
                                />
                            </Link>
                        )}
                    </span>

                    <h2 className="text-xl text-blue-500 pb-2 grow mt-5">
                        {week}. Woche
                    </h2>

                    <span className="flex-none mt-3">
                        {Number(week) + 1 <= weeksOfPregnancy && (
                            <Link to={`/week/${week + 1}`}>
                                <img
                                    src={`/size/${week + 1}.svg`}
                                    alt=""
                                    width="30"
                                />
                            </Link>
                        )}
                    </span>
                </div>
            )}
        </div>
    )
}

export default WeekNavigation
