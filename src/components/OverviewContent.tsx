import React from 'react'
import { Link } from 'react-router-dom'

const OverviewContent = (data: { items: WeekDetail[][] }) => {
    const { items } = data

    return (
        <>
            {items.map((item: WeekDetail[], index: number) => {
                return (
                    <React.Fragment key={index}>
                        <Link
                            to={`/week/${index + 2}`}
                            className="flex text-left flex-col"
                        >
                            <div className="flex flex-row justify-between">
                                <span>{index + 2}. Woche</span>
                                <span>&rarr;</span>
                            </div>

                            {item.length === 0 && (
                                <span className="text-sm text-gray-400">
                                    <em>Wurde noch nicht gepflegt.</em>
                                </span>
                            )}

                            <ul>
                                {item.length >= 1 &&
                                    item.map(
                                        (item: WeekDetail, index: number) => {
                                            return (
                                                <li
                                                    className="text-sm text-green-700"
                                                    key={index}
                                                >
                                                    {item.name}
                                                </li>
                                            )
                                        }
                                    )}
                            </ul>
                        </Link>
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default OverviewContent
