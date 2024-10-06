import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import { Timeline } from '@/service/data'
import React from 'react'
import { Link } from 'react-router-dom'

const Overview = () => {
    const timeline = Timeline

    return (
        <section className="flex flex-col py-2 w-80">
            <Tabs defaultValue="highlights" className="w-full">
                <div className="card">
                    <TabsList className="flex flex-row mx-2 justify-center">
                        <TabButton
                            value="highlights"
                            text="Highlights"
                            width={45}
                        />
                        <TabButton
                            value="symptoms"
                            text="Symptome"
                            width={45}
                        />
                        <TabButton
                            value="checklist"
                            text="Checkliste"
                            width={30}
                        />
                    </TabsList>
                </div>

                <div className="flex mt-2">
                    <div className="card flex flex-col w-full">
                        <TabsContent value="highlights">
                            {timeline.map((trimester: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <h2>
                                            {index + 1}. Trimester (Woche{' '}
                                            {trimester.timeline})
                                        </h2>

                                        {trimester.weeks.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <Link
                                                        to={`/week/${item.week}`}
                                                        key={index}
                                                        className="flex flex-col"
                                                    >
                                                        <strong className="text-white">
                                                            {item.week}. Woche
                                                        </strong>

                                                        {!item.highlights && (
                                                            <span className="text-sm text-gray-500">
                                                                Wurde noch nicht
                                                                gepflegt.
                                                            </span>
                                                        )}

                                                        {item.highlights &&
                                                            item.highlights.map(
                                                                (
                                                                    item: any,
                                                                    index: number
                                                                ) => {
                                                                    return (
                                                                        <span
                                                                            className="text-sm text-blue-500"
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                    )
                                                                }
                                                            )}
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </React.Fragment>
                                )
                            })}
                        </TabsContent>

                        <TabsContent value="symptoms">
                            {timeline.map((trimester: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <h2>
                                            {index + 1}. Trimester (Woche{' '}
                                            {trimester.timeline})
                                        </h2>

                                        {trimester.weeks.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <Link
                                                        to={`/week/${item.week}`}
                                                        key={index}
                                                        className="flex flex-col"
                                                    >
                                                        <strong className="text-white">
                                                            {item.week}. Woche
                                                        </strong>

                                                        {!item.highlights && (
                                                            <span className="text-sm text-gray-500">
                                                                Wurde noch nicht
                                                                gepflegt.
                                                            </span>
                                                        )}

                                                        {item.symptoms &&
                                                            item.symptoms.map(
                                                                (
                                                                    item: any,
                                                                    index: number
                                                                ) => {
                                                                    return (
                                                                        <span
                                                                            className="text-sm text-blue-500"
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                    )
                                                                }
                                                            )}
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </React.Fragment>
                                )
                            })}
                        </TabsContent>

                        <TabsContent value="checklist">
                            {timeline.map((trimester: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <h2>
                                            {index + 1}. Trimester (Woche{' '}
                                            {trimester.timeline})
                                        </h2>

                                        {trimester.weeks.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <Link
                                                        to={`/week/${item.week}`}
                                                        key={index}
                                                        className="flex flex-col"
                                                    >
                                                        <strong className="text-white">
                                                            {item.week}. Woche
                                                        </strong>

                                                        {!item.highlights && (
                                                            <span className="text-sm text-gray-500">
                                                                Wurde noch nicht
                                                                gepflegt.
                                                            </span>
                                                        )}

                                                        {item.checklist &&
                                                            item.checklist.map(
                                                                (
                                                                    item: any,
                                                                    index: number
                                                                ) => {
                                                                    return (
                                                                        <span
                                                                            className="text-sm text-blue-500"
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                    )
                                                                }
                                                            )}
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </React.Fragment>
                                )
                            })}
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default Overview
