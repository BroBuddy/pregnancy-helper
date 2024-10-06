import React, { useState } from 'react'

const WeightGain = () => {
    const [startWeight, setStartWeight] = useState<number>(55000)
    const defaultWeight = startWeight / 1000 + ' kg'

    const weeksOfPregnancy = 41
    const weightTable = [
        [125, 175],
        [300, 475],
        [325, 475],
    ]

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
            <div className="card">
                <h2>Gewichtszunahme</h2>

                <p className="text-sm">
                    Normalgewichtige Frauen legen im Laufe der Schwangerschaft
                    im Durchschnitt etwa 11,5 bis 16 kg zu.
                </p>
                <p className="text-sm mt-5">
                    Dabei fällt die Gewichtszunahme im ersten Trimester mit
                    insgesamt 0,5 bis 2 kg eher gering aus, während sie sich im
                    zweiten und dritten Trimester auf circa 0,4 kg pro Woche
                    steigern kann.
                </p>
            </div>

            <div className="card">
                <div className="flex flex-col items-center">
                    <h2>Startgewicht</h2>

                    <select
                        defaultValue={defaultWeight}
                        className="bg-white rounded-md mb-5 w-55"
                        onChange={handleWeightAmount}
                    >
                        {Array.from({ length: 60 }).map(
                            (_: any, index: number) => {
                                return (
                                    <option key={index}>{index + 40} kg</option>
                                )
                            }
                        )}
                    </select>
                </div>

                {weightInWeek.map((increment: any, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <div className="flex flex-row justify-between mx-10">
                                <strong className="text-white">
                                    {index + 1}. Woche:
                                </strong>

                                <span className="text-sm">
                                    {getWeightIncrementByWeek(increment)} kg
                                </span>
                            </div>

                            {(index + 1 === 13 || index + 1 === 27) && <br />}
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    )
}

export default WeightGain
