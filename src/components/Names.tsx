import { BoyNames, GirlNames } from '@/service/names'
import { Tabs, TabsContent, TabsList } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import NamesList from './NamesList'

export const Names = () => {
    const boyNames = BoyNames
    const girlNames = GirlNames

    const amountOfBoyNames = boyNames.map((name: any) => name.names).flat()
    const amountOfGirlNames = girlNames.map((name: any) => name.names).flat()

    return (
        <section className="flex flex-col py-2 w-80">
            <Tabs defaultValue="gender" className="w-full">
                <div className="rounded-lg bg-white/70 my-2 p-4">
                    <TabsList className="flex flex-row mx-2 justify-center">
                        <TabButton
                            value="gender"
                            text="Geschlecht"
                            width={35}
                        />
                        <TabButton value="boy" text="Jungen" width={35} />
                        <TabButton value="girl" text="Mädchen" width={35} />
                    </TabsList>
                </div>

                <div className="flex mt-2">
                    <div className="flex flex-col w-full">
                        <TabsContent value="gender">
                            <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Den richtigen Namen finden
                                </h2>

                                <p className="text-sm">
                                    Auf der Suche nach einem Namen für Dein Baby
                                    kannst Du Rat in Büchern, Hitlisten oder bei
                                    einem Namens Generator suchen. Allerdings
                                    ist es in jedem Fall hilfreich mit ein paar
                                    Tricks zu arbeiten, um sich langsam an den
                                    perfekten Namen heranzutasten.
                                </p>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Listen schreiben
                                </h2>

                                <p className="text-sm">
                                    Schreibe alle Ideen auf. Diese Liste wird
                                    mit der Zeit wachsen, Du wirst Namen
                                    streichen und hinzufügen, verwerfen oder
                                    wiederentdecken.
                                </p>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Ohren auf
                                </h2>

                                <p className="text-sm">
                                    Inspiration lauert überall. Bleibe
                                    aufmerksam, denn der perfekte Name könnte in
                                    Deinem Lieblingsroman stecken oder in einem
                                    Songtext, eine Person oder ein Ort könnte
                                    Dich inspirieren.
                                </p>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Aussprechen
                                </h2>

                                <p className="text-sm">
                                    Freunde Dich mit dem Klang des Namens an,
                                    indem Du ihn mehrmals und immer wieder laut
                                    aussprichst.
                                </p>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Aufschreiben
                                </h2>

                                <p className="text-sm">
                                    Überlege Dir auch welche Schreibweise Du für
                                    den Namen Deines Kindes festlegen willst.
                                </p>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Der Nachname
                                </h2>

                                <p className="text-sm">
                                    Achte darauf, dass Vor- und Nachname sich
                                    flüssig aussprechen lassen.
                                </p>
                            </div>

                            <div className="flex flex-col rounded-lg bg-white/70 my-4 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Die Geschwister
                                </h2>

                                <p className="text-sm">
                                    Wenn Du möchtest, kannst Du den Namen des
                                    Babys mit denen der älteren Geschwister
                                    abstimmen.
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="boy">
                            <div className="flex flex-col rounded-lg bg-white/70 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Jungennamen
                                </h2>

                                {amountOfBoyNames && (
                                    <p className="text-sm">
                                        Aktuell stehen {amountOfBoyNames.length}{' '}
                                        Namen zur Auswahl.
                                    </p>
                                )}
                            </div>

                            <NamesList names={boyNames} />
                        </TabsContent>

                        <TabsContent value="girl">
                            <div className="flex flex-col rounded-lg bg-white/70 p-4">
                                <h2 className="text-xl text-blue-500 pb-2">
                                    Mädchennamen
                                </h2>

                                {amountOfGirlNames && (
                                    <p className="text-sm">
                                        Aktuell stehen{' '}
                                        {amountOfGirlNames.length} Namen zur
                                        Auswahl.
                                    </p>
                                )}
                            </div>

                            <NamesList names={girlNames} />
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}
