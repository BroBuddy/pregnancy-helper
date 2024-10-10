import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import Cycle from './Cycle'
import Schedule from './Schedule'
import Search from './Search'

const TrimesterOverview = () => {
    return (
        <section className="flex flex-col py-2 w-80">
            <Tabs defaultValue="calculator" className="w-full">
                <div className="flex flex-col rounded-lg bg-white/70 my-2 p-4">
                    <TabsList className="flex flex-row mx-2 justify-center">
                        <TabButton
                            value="calculator"
                            text="Zyklus"
                            width={36}
                        />
                        <TabButton
                            value="calendar"
                            text="Zeitplan"
                            width={36}
                        />
                    </TabsList>
                </div>

                <div className="flex mt-2">
                    <div className="flex flex-col w-full">
                        <TabsContent value="calculator">
                            <Cycle />
                            <Search />
                        </TabsContent>

                        <TabsContent value="calendar">
                            <Schedule />
                        </TabsContent>
                    </div>
                </div>
            </Tabs>
        </section>
    )
}

export default TrimesterOverview
