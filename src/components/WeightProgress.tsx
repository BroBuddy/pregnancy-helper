import React, { useState, useEffect, ChangeEvent } from 'react'
import Card from './Card'

const weightTable: number[][] = [
    [125, 175],
    [300, 475],
    [325, 475],
]
const WeightProgress = () => {
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

    const handleWeightAmount = (event: ChangeEvent<{ value: string }>) => {
        const weight = event?.currentTarget?.value.split(' ')[0]
        setStartWeight(Number(weight) * 1000)
    }

    return (
        <>
            <Card heading="Gewicht vor Schwangerschaft">
                <div className="flex flex-col items-center">
                    <select
                        defaultValue={defaultWeight}
                        className="bg-green-700/40 text-sm text-white p-1 mt-3"
                        onChange={handleWeightAmount}
                    >
                        {Array.from({ length: 60 }).map(
                            (_: unknown, index: number) => {
                                return (
                                    <option key={index}>{index + 40} kg</option>
                                )
                            }
                        )}
                    </select>
                </div>
            </Card>

            <Card heading="Mögliche Veränderungen">
                {weekWeight.map((increment: number[], index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="flex flex-row justify-between text-sm">
                                <span>{index + 1}. Woche</span>

                                <span className="text-green-900">
                                    {getWeightIncrementByWeek(increment)} kg
                                </span>
                            </div>

                            {(index + 1 === 13 || index + 1 === 27) && <br />}
                        </React.Fragment>
                    )
                })}
            </Card>
        </>
    )
}

export default WeightProgress
