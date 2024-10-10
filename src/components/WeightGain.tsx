import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import WeightProgress from './WeightProgress'
import Card from './Card'

const compositions: Composition[] = [
    {
        title: 'Gewicht des Babys',
        text: 'ca. 3 – 3,8 kg',
    },
    {
        title: 'Blutvolumen',
        text: 'ca. 1,2 kg',
    },
    {
        title: 'Gebärmutter',
        text: 'ca. 1,3 kg',
    },
    {
        title: 'Plazenta',
        text: 'ca. 0,6 – 0,8 kg',
    },
    {
        title: 'Fruchtwasser',
        text: 'ca. 1,3 kg',
    },
    {
        title: 'Gewebsflüssigkeit',
        text: 'ca. 2 – 2,5 kg',
    },
    {
        title: 'Brustdrüsengewebe',
        text: 'ca. 0,8 – 1,0 kg',
    },
    {
        title: 'Depotfett',
        text: 'ca. 1,7 kg',
    },
]

const WeightGain = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Tabs defaultValue="weight">
                <TabsList className="flex flex-row justify-center">
                    <TabButton value="weight" text="Gewicht" width={25} />
                    <TabButton value="chart" text="Verlauf" width={25} />
                </TabsList>

                <div className="flex flex-col w-full">
                    <TabsContent value="weight">
                        <Card heading="Gewichtszunahme">
                            <p>
                                Normalgewichtige Frauen legen im Laufe der
                                Schwangerschaft im Durchschnitt etwa 11,5 bis 16
                                kg zu.
                            </p>

                            <p className="mt-3">
                                Dabei fällt die Gewichtszunahme im ersten
                                Trimester mit insgesamt 0,5 bis 2 kg eher gering
                                aus, während sie sich im zweiten und dritten
                                Trimester auf circa 0,4 kg pro Woche steigern
                                kann.
                            </p>
                        </Card>

                        <Card heading="Zusammensetzung">
                            {compositions.map(
                                (composition: Composition, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-row justify-between text-sm"
                                        >
                                            <span>{composition.title}</span>

                                            <span className="text-green-900">
                                                {composition.text}
                                            </span>
                                        </div>
                                    )
                                }
                            )}
                        </Card>
                    </TabsContent>

                    <TabsContent value="chart">
                        <WeightProgress />
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    )
}

export default WeightGain
