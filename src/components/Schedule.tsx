import { cn } from '@/lib/utils'
import { Timeline } from '@/service/data'
import { CalendarIcon } from '@radix-ui/react-icons'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@radix-ui/react-popover'
import { Calendar } from './ui/calendar'
import { useState } from 'react'

const months: string[] = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
]

const Schedule = () => {
    const timeline = Timeline

    const weeksOfPregnancy: number = 41
    const [date, setDate] = useState<string>('03/20/2025')

    const calculateDate = (week: number | string) => {
        const currentDate = new Date(String(date))
        return currentDate.getTime() - Number(week) * 7 * 24 * 60 * 60 * 1000
    }

    const getFullDate = (date: string | number) => {
        const currentDate = new Date(date)
        return `${currentDate.getDate()}.${months[currentDate.getMonth()]}.${currentDate.getFullYear()}`
    }

    return (
        <>
            <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                <h2 className="text-xl text-blue-500 pb-2">
                    Zeitplan bis zur Geburt
                </h2>

                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            className={cn(
                                'justify-center items-center flex bg-white/0',
                                !date && 'text-muted-foreground'
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date !== 'undefined' ? (
                                getFullDate(date)
                            ) : (
                                <span className="text-sm">Datum auswählen</span>
                            )}
                        </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-auto p-0 bg-white rounded-lg">
                        <Calendar
                            mode="single"
                            fromDate={new Date()}
                            selected={new Date(date)}
                            onSelect={(value) => setDate(String(value))}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </div>

            {date !== 'undefined' &&
                timeline.map((trimester: Trimester, index: number) => {
                    return (
                        <div
                            className="flex flex-col rounded-lg bg-white/70 my-4 p-4"
                            key={index}
                        >
                            <h2 className="text-xl text-blue-500 pb-2">
                                {index + 1}. Trimester (Woche{' '}
                                {trimester.timeline})
                            </h2>

                            {trimester.weeks.map(
                                (item: Week, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-row justify-between mx-4"
                                        >
                                            <strong className="text-white">
                                                {item.week}. Woche
                                            </strong>

                                            <span className="text-sm text-blue-500">
                                                {getFullDate(
                                                    calculateDate(
                                                        weeksOfPregnancy -
                                                            item.week +
                                                            1
                                                    )
                                                )}{' '}
                                                -{' '}
                                                {getFullDate(
                                                    calculateDate(
                                                        weeksOfPregnancy -
                                                            item.week
                                                    )
                                                )}
                                            </span>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    )
                })}
        </>
    )
}

export default Schedule
