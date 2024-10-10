import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import WeightProgress from './WeightProgress'

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
        <section className="flex flex-col py-2 w-80">
            <Tabs defaultValue="weight" className="w-full">
                <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                    <TabsList className="flex flex-row mx-2 justify-center">
                        <TabButton value="weight" text="Gewicht" width={36} />
                        <TabButton value="chart" text="Verlauf" width={36} />
                    </TabsList>
                </div>

                <div className="flex mt-2">
                    <div className="flex flex-col w-full">
                        <TabsContent value="weight">
                            <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Gewichtszunahme
                                </h2>

                                <p className="text-sm text-left">
                                    Normalgewichtige Frauen legen im Laufe der
                                    Schwangerschaft im Durchschnitt etwa 11,5
                                    bis 16 kg zu.
                                </p>
                                <p className="text-sm text-left mt-5">
                                    Dabei fällt die Gewichtszunahme im ersten
                                    Trimester mit insgesamt 0,5 bis 2 kg eher
                                    gering aus, während sie sich im zweiten und
                                    dritten Trimester auf circa 0,4 kg pro Woche
                                    steigern kann.
                                </p>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Zusammensetzung
                                </h2>

                                {compositions.map(
                                    (
                                        composition: Composition,
                                        index: number
                                    ) => {
                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-row justify-between mx-2"
                                            >
                                                <strong className="text-white">
                                                    {composition.title}
                                                </strong>

                                                <span className="text-sm">
                                                    {composition.text}
                                                </span>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="chart">
                            <WeightProgress />
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default WeightGain
