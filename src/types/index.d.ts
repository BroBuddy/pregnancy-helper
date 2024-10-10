type Composition = {
    title: string
    text: string
}

type NameCategory = {
    letter: string
    names: string[]
}

type Trimester = {
    trimester: number
    timeline: string
    weeks: Week[]
}

type Week = {
    week: number
    baby?: Baby
    highlights?: WeekDetail[]
    symptoms?: WeekDetail[]
    checklist?: WeekDetail[]
}

type WeekDetail = {
    name: string
    description: string
}

type Baby = {
    length?: number
    weight?: number
    size?: string
}

type Faq = {
    question: string
    answer: string[]
}
