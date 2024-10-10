import { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'

const Cycle = () => {
    const navigate = useNavigate()
    const weeksOfPregnancy: number = 41

    const handleCycleWeek = (event: ChangeEvent<{ value: string }>) => {
        const week = event?.currentTarget?.value.split(' ')[0]

        navigate(`/week/${week}`)
    }

    return (
        <Card heading="Woche">
            <p className="text-sm">In welcher Woche befindest du dich?</p>

            <div className="flex flex-col items-center">
                <select
                    className="bg-green-700/40 text-sm text-white p-1 mt-3"
                    onChange={handleCycleWeek}
                >
                    <option>Bitte auswählen</option>
                    {Array.from({ length: weeksOfPregnancy - 1 }).map(
                        (_: unknown, index: number) => {
                            return (
                                <option key={index}>{index + 2}. Woche</option>
                            )
                        }
                    )}
                </select>
            </div>
        </Card>
    )
}

export default Cycle
