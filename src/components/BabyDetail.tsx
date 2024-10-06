const BabyDetail = ({
    week,
    baby,
}: {
    week: number
    baby?: { size?: string; length?: number; weight?: number }
}) => {
    return (
        <div className="flex flex-col items-center">
            <img src={`/size/${week}.svg`} alt="" width="150" />

            {baby && (
                <>
                    {baby.size && (
                        <div className="flex flex-col items-center my-5">
                            {baby.size}
                        </div>
                    )}

                    <div className="flex flex-row w-full">
                        {baby.length && (
                            <div className="flex flex-col grow items-center justify-end">
                                <img
                                    src={`/icons/ruler.svg`}
                                    alt=""
                                    width="40"
                                />
                                <strong>Größe:</strong> {baby.length} cm
                            </div>
                        )}

                        {baby.weight && (
                            <div className="flex flex-col grow items-center justify-end">
                                <img
                                    src={`/icons/scale.svg`}
                                    alt=""
                                    width="30"
                                />
                                <strong>Gewicht:</strong> {baby.weight} kg
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

export default BabyDetail
