import Banner from "@/components/banner";
import HouseList from "@/components/houseList";
import React, {useCallback, useState} from "react";
import House from "@/components/house";
import navValues from "@/helpers/navValues";
import ComponentPicker from "@/components/componentPicker";

const navigationContext = React.createContext(navValues.home);

const App = () => {
    // const [selectedHouse, setSelectedHouse] = useState();
    //
    // const setSelectedHouseWrapper = (house) => {
    //     setSelectedHouse(house);
    // }

    const navigate = useCallback(
        (navTo, param) => setNav({current: navTo, param, navigate}),
        []
    );

    const [nav, setNav] = useState({current: navValues.home, navigate});

    return (
        <navigationContext.Provider value={nav}>
            <Banner text="Text for the text"></Banner>
            <ComponentPicker currentNavLocation={nav.current}/>
        </navigationContext.Provider>
    );
};

export {navigationContext};
export default App;