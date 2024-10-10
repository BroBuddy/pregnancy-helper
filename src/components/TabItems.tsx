const TabItems = ({ items }: { items: WeekDetail[] }) => {
    return (
        <>
            {items.map((item: WeekDetail, index: number) => {
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
