import { useNavigate } from 'react-router-dom'

const Cycle = () => {
    const navigate = useNavigate()
    const weeksOfPregnancy: number = 41

    const handleCycleWeek = (event: any) => {
        const week = event.target.value.split(' ')[0]

        navigate(`/week/${week}`)
    }

    return (
        <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
            <h2 className="text-xl text-blue-500 pb-2">Zyklus</h2>

            <p className="text-sm">In welcher Woche befindest du dich?</p>

            <div className="flex flex-col items-center">
                <select
                    className="bg-white rounded-md mt-3"
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
        </div>
    )
}

export default Cycle
