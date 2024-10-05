import { Timeline } from '@/service/data'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { Link, useParams } from 'react-router-dom'
import { Progress } from './ui/progress'

const WeekDetail = () => {
    const timeline = Timeline
    const weeksOfPregnancy = 40
    const { week } = useParams()

    const details = timeline
        .map((trimester) => trimester.weeks)
        .flat()
        .find((item) => item.week === Number(week))

    const progress = (Number(week) * 100) / weeksOfPregnancy

    return (
        <div className="flex flex-col">
            <div className="card flex flex-col items-center">
                <Progress value={progress} className="bg-white" />
                {week && (
                    <div className="flex flex-row items-center w-full">
                        <span className="flex-none">
                            {Number(week) - 1 >= 1 && (
                                <Link to={`/week/${Number(week) - 1}`}>
                                    &lArr;
                                </Link>
                            )}
                        </span>

                        <h2 className="grow mt-5">{week}. Woche</h2>

                        <span className="flex-none">
                            {Number(week) + 1 <= weeksOfPregnancy && (
                                <Link to={`/week/${Number(week) + 1}`}>
                                    &rArr;
                                </Link>
                            )}
                        </span>
                    </div>
                )}
            </div>

            <Tabs defaultValue="baby" className="w-[410px]">
                <TabsList className="flex flex-row justify-center">
                    <TabsTrigger
                        value="baby"
                        className="flex flex-col bg-gray-50 p-3 mx-1 transition-colors hover:bg-gray-100 items-center justify-center"
                    >
                        <img src={`/icons/baby.svg`} alt="" />
                        Baby
                    </TabsTrigger>
                    <TabsTrigger
                        value="highlights"
                        className="flex flex-col bg-gray-50 p-3 mx-1 transition-colors hover:bg-gray-100 items-center justify-center"
                    >
                        <img src={`/icons/highlights.svg`} alt="" />
                        Highlights
                    </TabsTrigger>
                    <TabsTrigger
                        value="symptoms"
                        className="flex flex-col bg-gray-50 p-3 mx-1 transition-colors hover:bg-gray-100 items-center justify-center"
                    >
                        <img src={`/icons/symptoms.svg`} alt="" />
                        Symptome
                    </TabsTrigger>
                    <TabsTrigger
                        value="checklist"
                        className="flex flex-col bg-gray-50 p-3 mx-1 transition-colors hover:bg-gray-100 items-center justify-center"
                    >
                        <img src={`/icons/checklist.svg`} alt="" />
                        Checkliste
                    </TabsTrigger>
                </TabsList>

                {details?.baby && (
                    <TabsContent value="baby">
                        <div className="card flex flex-col items-center">
                            {details?.baby && (
                                <>
                                    <div className="flex flex-col items-center gap-4">
                                        {details?.baby.size}
                                        <img
                                            src={`/size/${week}.svg`}
                                            alt=""
                                            width="150"
                                            className="mb-4"
                                        />
                                    </div>

                                    <div>
                                        <strong>Größe:</strong>{' '}
                                        {details?.baby.length} cm
                                    </div>
                                    <div>
                                        <strong>Gewicht:</strong>{' '}
                                        {details?.baby.weight} kg
                                    </div>
                                </>
                            )}
                        </div>
                    </TabsContent>
                )}

                {details?.highlights && (
                    <TabsContent value="highlights">
                        <div className="card">
                            {details?.highlights.map(
                                (item: any, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-4"
                                        >
                                            <h2>{item.name}</h2>
                                            <p className="mb-5">
                                                {item.description}
                                            </p>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </TabsContent>
                )}

                {details?.symptoms && (
                    <TabsContent value="symptoms">
                        <div className="card">
                            {details?.symptoms.map(
                                (item: any, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-4"
                                        >
                                            <h2>{item.name}</h2>
                                            <p className="mb-5">
                                                {item.description}
                                            </p>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </TabsContent>
                )}

                {details?.checklist && (
                    <TabsContent value="checklist">
                        <div className="card">
                            {details?.checklist.map(
                                (item: any, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center gap-4"
                                        >
                                            <h2>{item.name}</h2>
                                            <p className="mb-5">
                                                {item.description}
                                            </p>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </TabsContent>
                )}
            </Tabs>
        </div>
    )
}

export default WeekDetail
