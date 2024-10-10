import { Timeline } from '@/service/data'
import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import { useParams } from 'react-router-dom'
import WeekNavigation from './WeekNavigation'
import TabItems from './TabItems'
import BabyDetail from './BabyDetail'
import TabButton from './TabButton'

const WeekDetail = () => {
    const timeline = Timeline
    const weeksOfPregnancy: number = 41
    const { week } = useParams()

    const details = timeline
        .map((trimester: Trimester) => trimester.weeks)
        .flat()
        .find((item: Week) => item.week === Number(week))

    return (
        <section className="flex flex-col py-2 w-80">
            <WeekNavigation
                week={Number(week)}
                weeksOfPregnancy={weeksOfPregnancy}
            />

            <Tabs defaultValue="baby" className="w-full">
                <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                    <TabsList className="flex flex-row mx-2 justify-center">
                        <TabButton value="baby" text="Baby" width={30} />
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
                    <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4 w-full">
                        <TabsContent value="baby">
                            <BabyDetail
                                week={Number(week)}
                                baby={details?.baby}
                            />
                        </TabsContent>

                        {details?.highlights && (
                            <TabsContent value="highlights">
                                <TabItems items={details?.highlights} />
                            </TabsContent>
                        )}

                        {details?.symptoms && (
                            <TabsContent value="symptoms">
                                <TabItems items={details?.symptoms} />
                            </TabsContent>
                        )}

                        {details?.checklist && (
                            <TabsContent value="checklist">
                                <TabItems items={details?.checklist} />
                            </TabsContent>
                        )}
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default WeekDetail
