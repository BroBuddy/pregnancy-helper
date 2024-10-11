import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import WeightProgress from './WeightProgress'
import Card from './Card'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const compositions: Composition[] = [
    {
        title: '1. Gewicht des Babys',
        text: 'ca. 3 – 3,8 kg',
    },
    {
        title: '2. Blutvolumen',
        text: 'ca. 1,2 kg',
    },
    {
        title: '3. Gebärmutter',
        text: 'ca. 1,3 kg',
    },
    {
        title: '4. Plazenta',
        text: 'ca. 0,6 – 0,8 kg',
    },
    {
        title: '5. Fruchtwasser',
        text: 'ca. 1,3 kg',
    },
    {
        title: '6. Gewebsflüssigkeit',
        text: 'ca. 2 – 2,5 kg',
    },
    {
        title: '7. Brustdrüsengewebe',
        text: 'ca. 0,8 – 1,0 kg',
    },
    {
        title: '8. Depotfett',
        text: 'ca. 1,7 kg',
    },
]

ChartJS.register(ArcElement, Tooltip, Legend)

const WeightGain = () => {
    const data = {
        labels: ['1.', '2.', '3.', '4.', '5.', '6.', '7.', '8.'],
        datasets: [
            {
                label: 'ca. in kg',
                data: [3.4, 1.2, 1.3, 0.7, 1.3, 2.25, 0.9, 1.7],
                backgroundColor: [
                    '#81BECE',
                    '#378BA4',
                    '#036280',
                    '#012E4A',
                    '#E0F4F5',
                    '#A7D1D2',
                    '#63898C',
                    '#015366',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.7)',
                    'rgba(255, 255, 255, 0.7)',
                ],
                borderWidth: 2,
            },
        ],
    }
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

                            <div className="m-2">
                                <Doughnut data={data} />
                            </div>
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
