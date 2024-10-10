import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import React, { useEffect, useState } from 'react'
import TabButton from './TabButton'

const weightTable: number[][] = [
    [125, 175],
    [300, 475],
    [325, 475],
]

const compositions: any[] = [
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
    const [startWeight, setStartWeight] = useState<number>(55000)
    const [weekWeight, setWeekWeight] = useState<number[][]>([])

    const defaultWeight = startWeight / 1000 + ' kg'
    const weeksOfPregnancy: number = 41

    useEffect(() => {
        const weightInWeek = [[startWeight, startWeight]]

        for (let i = 0; i <= weeksOfPregnancy; i++) {
            if (i < 14) {
                weightInWeek.push([
                    weightInWeek[i][0] + weightTable[0][0],
                    weightInWeek[i][1] + weightTable[0][1],
                ])
            } else if (i >= 14 && i < 28) {
                weightInWeek.push([
                    weightInWeek[i][0] + weightTable[1][0],
                    weightInWeek[i][1] + weightTable[1][1],
                ])
            } else if (i >= 28 && i <= 39) {
                weightInWeek.push([
                    weightInWeek[i][0] + weightTable[2][0],
                    weightInWeek[i][1] + weightTable[2][1],
                ])
            }
        }

        setWeekWeight(weightInWeek)
    }, [startWeight])

    const getWeightIncrementByWeek = (increment: number[]) => {
        return (
            (increment[0] / 1000).toFixed(1) +
            ' - ' +
            (increment[1] / 1000).toFixed(1)
        )
    }

    const handleWeightAmount = (event: any) => {
        const weight = event.target.value.split(' ')[0]
        setStartWeight(weight * 1000)
    }

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

                                <p className="text-sm">
                                    Normalgewichtige Frauen legen im Laufe der
                                    Schwangerschaft im Durchschnitt etwa 11,5
                                    bis 16 kg zu.
                                </p>
                                <p className="text-sm mt-5">
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
                                    (composition: any, index: number) => {
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
                            <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                                <div className="flex flex-col items-center">
                                    <h2 className="text-xl text-blue-500 pb-2">
                                        Gewicht vor Schwangerschaft
                                    </h2>

                                    <select
                                        defaultValue={defaultWeight}
                                        className="bg-white rounded-md w-55"
                                        onChange={handleWeightAmount}
                                    >
                                        {Array.from({ length: 60 }).map(
                                            (_: unknown, index: number) => {
                                                return (
                                                    <option key={index}>
                                                        {index + 40} kg
                                                    </option>
                                                )
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Mögliche Veränderungen
                                </h2>

                                {weekWeight.map(
                                    (increment: number[], index: number) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <div className="flex flex-row justify-between mx-10">
                                                    <strong className="text-white">
                                                        {index + 1}. Woche
                                                    </strong>

                                                    <span className="text-sm">
                                                        {getWeightIncrementByWeek(
                                                            increment
                                                        )}{' '}
                                                        kg
                                                    </span>
                                                </div>

                                                {(index + 1 === 13 ||
                                                    index + 1 === 27) && <br />}
                                            </React.Fragment>
                                        )
                                    }
                                )}
                            </div>
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default WeightGain
