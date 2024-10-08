import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import { Timeline } from '@/service/data'
import OverviewContent from './OverviewContent'

const Overview = () => {
    const timeline = Timeline

    const highlights = timeline
        .map((trimester: Trimester) => trimester.weeks)
        .flat()
        .map((item: Week) => item.highlights)
        .map((item: any) => (item !== undefined ? item : []))

    const symptoms = timeline
        .map((trimester: Trimester) => trimester.weeks)
        .flat()
        .map((item: Week) => item.symptoms)
        .map((item: any) => (item !== undefined ? item : []))

    const checklist = timeline
        .map((trimester: Trimester) => trimester.weeks)
        .flat()
        .map((item: Week) => item.checklist)
        .map((item: any) => (item !== undefined ? item : []))

    return (
        <section className="flex flex-col py-2 w-80">
            <Tabs defaultValue="highlights" className="w-full">
                <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
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
                    <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4 w-full">
                        <TabsContent value="highlights">
                            <h2 className="text-xl text-blue-500 pb-2">
                                Anstehende Highlights
                            </h2>
                            <OverviewContent items={highlights} />
                        </TabsContent>

                        <TabsContent value="symptoms">
                            <h2 className="text-xl text-blue-500 pb-2">
                                Mögliche Symptome
                            </h2>
                            <OverviewContent items={symptoms} />
                        </TabsContent>

                        <TabsContent value="checklist">
                            <h2 className="text-xl text-blue-500 pb-2">
                                Hilfreiche Checkliste
                            </h2>
                            <OverviewContent items={checklist} />
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default Overview
