import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import { Timeline } from '@/service/data'
import OverviewContent from './OverviewContent'

const Overview = () => {
    const timeline = Timeline

    const highlights = timeline
        .map((trimester: any) => trimester.weeks)
        .flat()
        .map((item: any) => item.highlights)
        .map((item: any) => (item !== undefined ? item : []))

    const symptoms = timeline
        .map((trimester: any) => trimester.weeks)
        .flat()
        .map((item: any) => item.symptoms)
        .map((item: any) => (item !== undefined ? item : []))

    const checklist = timeline
        .map((trimester: any) => trimester.weeks)
        .flat()
        .map((item: any) => item.checklist)
        .map((item: any) => (item !== undefined ? item : []))

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
                            <OverviewContent items={highlights} />
                        </TabsContent>

                        <TabsContent value="symptoms">
                            <OverviewContent items={symptoms} />
                        </TabsContent>

                        <TabsContent value="checklist">
                            <OverviewContent items={checklist} />
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default Overview
