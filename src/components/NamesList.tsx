import Card from './Card'

const NamesList = (data: { names: NameCategory[] }) => {
    const { names } = data

    return (
        <>
            {names.map((name: NameCategory, index: number) => {
                return (
                    <Card key={index} heading={name.letter}>
                        <div className="flex flex-row text-left flex-wrap">
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
                    </Card>
                )
            })}
        </>
    )
}

export default NamesList
