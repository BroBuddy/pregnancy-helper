const TabItems = ({
    items,
}: {
    items: { name: string; description: string }[]
}) => {
    return (
        <>
            {items.map((item: any, index: number) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-4"
                    >
                        <h2>{item.name}</h2>
                        <p className="mb-5">{item.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default TabItems
