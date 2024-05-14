import {useEffect, useState} from "react";
import loadingStatus from "@/helpers/loadingStatus";
import useGetRequest from "@/hooks/useGetRequest";

const useHooks = () => {
    const [houses, setHouses] = useState([]);
    const {get, loadingState, setLoadingState} = useGetRequest("./houses.json");
    // const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    useEffect(() => {
        const fetchHouses = async () => {
            const houses = await get();

            setHouses(houses);

            // setLoadingState(loadingStatus.isLoading);
            //
            // try {
            //     const res = await fetch("./houses.json");
            //     const data = await res.json();
            //
            //     setHouses(data);
            //     setLoadingState(loadingStatus.loaded);
            // } catch {
            //     setLoadingState(loadingStatus.hasError);
            // }

        };

        fetchHouses();
    }, [get]);

    return {houses, setHouses, loadingState, setLoadingState};
};

export default useHooks;