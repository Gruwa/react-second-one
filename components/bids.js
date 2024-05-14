import useBids from "@/hooks/useBids";
import {useState} from "react";
import LoadingIndicator from "@/components/loadingIndicator";
import currencyFormatter from "@/helpers/currencyFormatter";

const Bids = ({house}) => {
    const {bids, loadingState, addBid} = useBids(house.id);

    const emptyBid = {
        houseId: house.id,
        bidder: "",
        amount: 0,
    };

    const [newBid, setNewBid] = useState(emptyBid);

    if (loadingState !== loadingState.loaded) {
        return <LoadingIndicator loadingState={loadingState}/>;
    }

    const onBidSubmitClick = () => {
        addBid(newBid);
        setNewBid(emptyBid);
    };

    return (
        <>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-sm">
                        <thead>
                        <tr>
                            <th>Bidder</th>
                            <th>Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bids.map((bid) => (
                            <tr key={bid.id}>
                                <td>{bid.bidder}</td>
                                <td>{currencyFormatter.format(bid.amount)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <input id={"bidder"}
                           className={"h-100"}
                           type={"text"}
                           value={newBid.bidder}
                           onChange={(e) => setNewBid({
                               ...newBid,
                               bidder: e.target.value,
                           })}
                           placeholder={"Bidder"}
                    />
                </div>
                <div className="col-5">
                    <input id={"amount"}
                           className={"h-100"}
                           type={"number"}
                           value={newBid.amount}
                           onChange={(e) => setNewBid({...newBid, amount: parseInt(e.target.value)})}
                           placeholder={"Amount"}
                    />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary" onClick={onBidSubmitClick}>Add</button>
                </div>
            </div>
        </>
    );
};
export default Bids;