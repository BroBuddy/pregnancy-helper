const NamesList = ({ names }: any) => {
    return (
        <>
            {names.map((name: any, index: number) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col rounded-lg bg-white/70 my-4 p-4"
                    >
                        <h2 className="text-xl text-blue-500 mt-2 pb-2">
                            {name.letter}
                        </h2>

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
        </>
    )
}

export default NamesList
