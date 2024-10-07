import { Link } from 'react-router-dom'

const Cycle = () => {
    const weeksOfPregnancy: number = 41

    return (
        <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
            <h2 className="text-xl text-blue-500 pb-2">Zyklus</h2>

            <div className="flex flex-row flex-wrap">
                {Array.from({ length: weeksOfPregnancy - 1 }).map(
                    (_: unknown, index: number) => {
                        return (
                            <div
                                key={index}
                                className="flex w-[142px] my-2 justify-center"
                            >
                                <Link
                                    to={`/week/${index + 2}`}
                                    className="flex flex-col items-center"
                                >
                                    <img
                                        src={`/size/${index + 2}.svg`}
                                        alt=""
                                        width="30"
                                    />

                                    <strong className="flex text-white py-1">
                                        {index + 2}. Woche
                                    </strong>
                                </Link>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Cycle
