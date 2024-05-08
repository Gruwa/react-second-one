import HouseRow from "@/components/HouseRow";
import {useEffect, useState} from "react";

// const houseArray = [
//     {
//         id: 1, address: "12 ASD", country: "US", price: 90000
//     },
//     {
//         id: 2, address: "13 ASD", country: "UK", price: 1290000
//     }
// ]
const HouseList = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const res = await fetch("./houses.json");
            const data = await res.json();

            setHouses(data);
        };

        fetchHouses();
    }, []);

    const addHouse = () => {
        setHouses(
            [
                ...houses,
                {
                    id: houses.length + 1,
                    address: (houses.length + 13) + " ASD",
                    country: "EU",
                    price: 13000 * houses.length
                }
            ]
        )
    };

    return (<>
        <div className="row mb-2">
            <h5 className="themeFontColor text-center">House List</h5>
        </div>
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Address</th>
                <th>Country</th>
                <th>Ask Price</th>
            </tr>
            </thead>
            <tbody>
            {houses.map((h) => (
                <HouseRow key={h.id} house={h}></HouseRow>
            ))}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={addHouse}>
            Add
        </button>
    </>)
}

export default HouseList;