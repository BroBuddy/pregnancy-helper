const Card = ({ heading, children }: any) => {
    return (
        <div className="flex flex-col bg-white/70 my-2 p-4 text-sm">
            {heading && (
                <h2 className="text-xl text-green-700 pb-2">{heading}</h2>
            )}
            {children}
        </div>
    )
}

export default Card
