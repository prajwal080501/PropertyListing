import { useState } from "react";
import { TabContext } from "../context/TabContext";

export default function TabsProvider({ children }) {
    const [activeTab, setActiveTab] = useState("Pune");


    const changeTab = (cityName) => {
        setActiveTab(cityName);
    }

    return (
        <TabContext.Provider value={{ activeTab, changeTab }}>
            {children}
        </TabContext.Provider>
    )

}

