import { FAQ } from '@/service/faq'
import React, { useState } from 'react'

const Search = () => {
    const [faq, setFaq] = useState<any[]>(FAQ)
    const [q, setQ] = useState<string>('')

    const handleSearch = (event: any) => {
        const value = event.target.value.toLowerCase()
        const length = value.length

        if (length >= 3) {
            setQ(value)

            const list = faq.filter((item: any) => {
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
            <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                <h2 className="text-xl text-blue-500 pb-2">Suche</h2>

                <input
                    className="bg-white rounded-lg p-1 text-sm"
                    placeholder="Was interessiert dich?"
                    onChange={handleSearch}
                />
            </div>

            {q && (
                <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                    <h2 className="text-xl text-blue-500 pb-2">
                        {faq?.length} Treffer
                    </h2>

                    {faq &&
                        faq.map((item: any, index: number) => {
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
