import currencyFormatter from "@/helpers/currencyFormatter";

const HouseRow = ({house}) => {

    return(
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {house.price > 50000 && (
                <td className={`${house.price < 100000 ? "text-primary" : ""}`}>{(currencyFormatter.format(house.price))}</td>
            )}
        </tr>
    );
};

export default HouseRow;