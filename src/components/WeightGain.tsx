import React from 'react'

const WeightGain = () => {
    const startWeight = 55000
    const weeksOfPregnancy = 40
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
        } else if (i >= 28 && i <= 38) {
            weightInWeek.push([
                weightInWeek[i][0] + weightTable[2][0],
                weightInWeek[i][1] + weightTable[2][1],
            ])
        }
    }

    const getWeightIncrementByWeek = (increment: number[]) => {
        return increment[0] / 1000 + ' - ' + increment[1] / 1000
    }

    return (
        <>
            <div className="card">
                <h2>Weight Gain</h2>

                <div>
                    {weightInWeek.map((increment, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div>
                                    {index + 1}. Woche:{' '}
                                    {getWeightIncrementByWeek(increment)} kg
                                </div>

                                {(index + 1 === 13 || index + 1 === 27) && (
                                    <br />
                                )}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default WeightGain
