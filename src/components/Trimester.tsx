import { Tabs, TabsList, TabsContent } from '@radix-ui/react-tabs'
import TabButton from './TabButton'
import Cycle from './Cycle'
import Schedule from './Schedule'
import Search from './Search'

const Trimester = () => {
    return (
        <section className="flex flex-col py-2 w-full">
            <Tabs defaultValue="calculator">
                <TabsList className="flex flex-row justify-center">
                    <TabButton value="calculator" text="Zyklus" width={30} />
                    <TabButton value="calendar" text="Zeitplan" width={30} />
                </TabsList>

                <div className="flex flex-col">
                    <TabsContent value="calculator">
                        <Cycle />
                        <Search />
                    </TabsContent>

                    <TabsContent value="calendar">
                        <Schedule />
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    )
}

export default Trimester
