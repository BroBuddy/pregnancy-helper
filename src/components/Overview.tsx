import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import { Timeline } from '@/service/data'
import OverviewContent from './OverviewContent'
import Card from './Card'

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
        <section className="flex flex-col py-2 w-full">
            <Tabs defaultValue="highlights">
                <TabsList className="flex flex-row mx-2 justify-center">
                    <TabButton
                        value="highlights"
                        text="Highlights"
                        width={37}
                    />
                    <TabButton value="symptoms" text="Symptome" width={37} />
                    <TabButton value="checklist" text="Checkliste" width={25} />
                </TabsList>

                <TabsContent value="highlights">
                    <Card heading="Anstehende Highlights">
                        <OverviewContent items={highlights} />
                    </Card>
                </TabsContent>

                <TabsContent value="symptoms">
                    <Card heading="Mögliche Symptome">
                        <OverviewContent items={symptoms} />
                    </Card>
                </TabsContent>

                <TabsContent value="checklist">
                    <Card heading="Hilfreiche Checkliste">
                        <OverviewContent items={checklist} />
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default Overview
