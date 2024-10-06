import { Babynames } from '@/service/names'

export const Names = () => {
    const names = Babynames

    const amountOfNames = names.map((name: any) => name.names).flat()

    return (
        <section className="flex flex-col py-2 w-80">
            <div className="card">
                <h2>Jungennamen</h2>

                {amountOfNames && (
                    <p className="text-sm">
                        Aktuell stehen {amountOfNames.length} Jungennamen zur
                        Auswahl.
                    </p>
                )}
            </div>

            {names.map((name: any, index: number) => {
                return (
                    <div key={index} className="card">
                        <h2>{name.letter}</h2>

                        <div className="flex flex-row flex-wrap">
                            {name.names.map((item: string, index: number) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex text-sm w-50"
                                    >
                                        {item}
                                        <span>,&nbsp;</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
