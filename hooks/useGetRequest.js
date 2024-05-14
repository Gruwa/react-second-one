import {useCallback, useState} from "react";
import loadingStatus from "@/helpers/loadingStatus";

const useGetRequest = (url) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    const get = useCallback(async () => {
        try {
            const rsp = await fetch(url);
            const result = await rsp.json();

            setLoadingState(loadingStatus.loaded);

            return result;
        } catch {
            setLoadingState(loadingStatus.hasError)
        }
    }, [url]);

    return {get, loadingState, setLoadingState};
};
export default useGetRequest;