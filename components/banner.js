import styles from './banner.module.css';
import {useContext} from "react";
import {navigationContext} from "@/components/app";
import navValues from "@/helpers/navValues";

const Banner = (props) => {
    const {navigate} = useContext(navigationContext);

    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="/foto1.png"
                     alt='logo'
                     className={styles.logo}
                     onClick={() => navigate(navValues.home)}/>
            </div>
            <div className="col-7 mt-5">
                {props.text}
            </div>
        </header>
    );
};

export default Banner;