import { FAQ } from '@/service/faq'
import React, { ChangeEvent, useState } from 'react'
import Card from './Card'

const Search = () => {
    const [faq, setFaq] = useState<Faq[]>(FAQ)
    const [q, setQ] = useState<string>('')

    const handleSearch = (event: ChangeEvent<{ value: string }>) => {
        const value = event?.currentTarget?.value.toLowerCase()
        const length = value.length

        if (length >= 3) {
            setQ(value)

            const list = faq.filter((item: Faq) => {
                return item.question.toLowerCase().includes(value) ? item : null
            })

            setFaq(list)
        } else {
            setQ('')
            setFaq(FAQ)
        }
    }

    return (
        <>
            <Card heading="Themen-Suche">
                <h2 className="text-xl text-green-700 pb-2"></h2>

                <p className="text-sm">Min. 3 Buchstaben eingeben.</p>

                <input
                    type="text"
                    className="text-white bg-green-700/40 py-2 px-3 mt-3 text-sm"
                    onChange={handleSearch}
                />
            </Card>

            {q && (
                <Card heading={`${faq?.length} Fragen gefunden`}>
                    {faq &&
                        faq.map((item: Faq, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <strong className="text-sm mt-2">
                                        {item.question}
                                    </strong>

                                    {item.answer.map(
                                        (answer: string, index: number) => {
                                            return (
                                                <p
                                                    key={index}
                                                    className="text-sm my-1"
                                                >
                                                    {answer}
                                                </p>
                                            )
                                        }
                                    )}
                                </React.Fragment>
                            )
                        })}
                </Card>
            )}
        </>
    )
}

export default Search
