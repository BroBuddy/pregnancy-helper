import { FAQ } from '@/service/faq'
import React, { ChangeEvent, useState } from 'react'

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
            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                <h2 className="text-xl text-blue-500 pb-2">Themen-Suche</h2>

                <p className="text-sm">Min. 3 Buchstaben eingeben.</p>

                <input
                    type="text"
                    className="bg-white rounded-lg p-1 mt-3  text-sm"
                    placeholder="Was interessiert dich?"
                    onChange={handleSearch}
                />
            </div>

            {q && (
                <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                    <h2 className="text-xl text-blue-500 pb-2">
                        {faq?.length} Fragen gefunden
                    </h2>

                    {faq &&
                        faq.map((item: Faq, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <strong className="text-sm">
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
                </div>
            )}
        </>
    )
}

export default Search
