import React from 'react'
import { Link } from 'react-router-dom'

const OverviewContent = ({ items }: { items: any[] }) => {
    return (
        <>
            {items.map((item: any, index: number) => {
                return (
                    <React.Fragment key={index}>
                        {index >= 1 && (
                            <Link
                                to={`/week/${index + 1}`}
                                className="flex flex-col"
                            >
                                <strong className="text-white">
                                    {index + 1}. Woche
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
                        )}
                    </React.Fragment>
                )
            })}
        </>
    )
}

export default OverviewContent
