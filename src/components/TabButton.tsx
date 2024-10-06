import { TabsTrigger } from './ui/tabs'

const TabButton = ({
    value,
    text,
    width,
}: {
    value: string
    text: string
    width: number
}) => {
    return (
        <TabsTrigger
            value={value}
            className="flex flex-col bg-transparent p-1 mx-1 items-center justify-end min-w-[68px]"
        >
            <img src={`/icons/${value}.svg`} alt="" width={width} />
            <span className="text-xs">{text}</span>
        </TabsTrigger>
    )
}

export default TabButton
