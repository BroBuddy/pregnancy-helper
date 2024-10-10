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
                        className="flex flex-col text-sm text-left gap-3"
                    >
                        <strong>{item.name}</strong>
                        <p className="mb-3">{item.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default TabItems
