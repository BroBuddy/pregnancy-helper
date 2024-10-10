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
import Card from './Card'

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

    const weeksOfPregnancy: number = 40
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
            <Card heading="Datum der Geburt">
                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            className={cn(
                                ' items-center flex bg-white/0 text-sm',
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

                    <PopoverContent className="w-auto p-0 bg-white/100">
                        <Calendar
                            mode="single"
                            fromDate={new Date()}
                            selected={new Date(date)}
                            onSelect={(value) => setDate(String(value))}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            </Card>

            {date !== 'undefined' &&
                timeline.map((trimester: Trimester, index: number) => {
                    return (
                        <Card
                            heading={`${index + 1}. Trimester (Woche ${trimester.timeline})`}
                            key={index}
                        >
                            {trimester.weeks.map(
                                (item: Week, index: number) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col text-sm w-full"
                                        >
                                            <span>{item.week}. Woche</span>

                                            <span className="text-green-900 mb-3">
                                                {getFullDate(
                                                    calculateDate(
                                                        weeksOfPregnancy -
                                                            item.week +
                                                            1
                                                    )
                                                )}
                                                <span className="px-1">-</span>
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
                        </Card>
                    )
                })}
        </>
    )
}

export default Schedule
