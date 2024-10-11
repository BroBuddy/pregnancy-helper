import { BoyNames, GirlNames } from '@/service/names'
import { Tabs, TabsContent, TabsList } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import NamesList from './NamesList'
import Card from './Card'

const Names = () => {
    const boyNames = BoyNames
    const girlNames = GirlNames

    const amountOfBoyNames = boyNames
        .map((name: NameCategory) => name.names)
        .flat()
    const amountOfGirlNames = girlNames
        .map((name: NameCategory) => name.names)
        .flat()

    return (
        <section className="flex flex-col py-2 w-full">
            <Tabs defaultValue="names">
                <TabsList className="flex flex-row justify-center">
                    <TabButton value="names" text="Namen" width={29} />
                    <TabButton value="boy" text="Jungen" width={29} />
                    <TabButton value="girl" text="Mädchen" width={29} />
                </TabsList>

                <div className="flex flex-col w-full">
                    <TabsContent value="names">
                        <Card heading="Den richtigen Namen finden">
                            <p>
                                Auf der Suche nach einem Namen für Dein Baby
                                kannst Du Rat in Büchern, Hitlisten oder bei
                                einem Namens Generator suchen. Allerdings ist es
                                in jedem Fall hilfreich mit ein paar Tricks zu
                                arbeiten, um sich langsam an den perfekten Namen
                                heranzutasten.
                            </p>

                            <strong className="my-3">Listen schreiben</strong>
                            <p>
                                Schreibe alle Ideen auf. Diese Liste wird mit
                                der Zeit wachsen, Du wirst Namen streichen und
                                hinzufügen, verwerfen oder wiederentdecken.
                            </p>

                            <strong className="my-3">Ohren auf</strong>
                            <p>
                                Inspiration lauert überall. Bleibe aufmerksam,
                                denn der perfekte Name könnte in Deinem
                                Lieblingsroman stecken oder in einem Songtext,
                                eine Person oder ein Ort könnte Dich
                                inspirieren.
                            </p>

                            <strong className="my-3">Aussprechen</strong>
                            <p>
                                Freunde Dich mit dem Klang des Namens an, indem
                                Du ihn mehrmals und immer wieder laut
                                aussprichst.
                            </p>

                            <strong className="my-3">Aufschreiben</strong>
                            <p>
                                Überlege Dir auch welche Schreibweise Du für den
                                Namen Deines Kindes festlegen willst.
                            </p>

                            <strong className="my-3">Der Nachname</strong>
                            <p>
                                Achte darauf, dass Vor- und Nachname sich
                                flüssig aussprechen lassen.
                            </p>

                            <strong className="my-3">Die Geschwister</strong>
                            <p>
                                Wenn Du möchtest, kannst Du den Namen des Babys
                                mit denen der älteren Geschwister abstimmen.
                            </p>
                        </Card>
                    </TabsContent>

                    <TabsContent value="boy">
                        <Card heading="Jungennamen">
                            {amountOfBoyNames && (
                                <p className="text-sm">
                                    Aktuell stehen {amountOfBoyNames.length}{' '}
                                    Namen zur Auswahl.
                                </p>
                            )}
                        </Card>

                        <NamesList names={boyNames} />
                    </TabsContent>

                    <TabsContent value="girl">
                        <Card heading="Mädchennamen">
                            {amountOfGirlNames && (
                                <p className="text-sm">
                                    Aktuell stehen {amountOfGirlNames.length}{' '}
                                    Namen zur Auswahl.
                                </p>
                            )}
                        </Card>

                        <NamesList names={girlNames} />
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    )
}

export default Names
