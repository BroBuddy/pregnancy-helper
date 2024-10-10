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
                            className="flex flex-col"
                        >
                            <strong className="text-white">
                                {index + 2}. Woche
                            </strong>

                            {item.length === 0 && (
                                <span className="text-sm text-gray-500">
                                    Wurde noch nicht gepflegt.
                                </span>
                            )}

                            {item.length >= 1 &&
                                item.map((item: any, index: number) => {
                                    return (
                                        <span
                                            className="text-sm text-blue-500"
                                            key={index}
                                        >
                                            {item.name}
                                        </span>
                                    )
                                })}
                        </Link>
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default OverviewContent
