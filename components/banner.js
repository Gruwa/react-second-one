import styles from './banner.module.css';

const Banner = (props) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="/foto1.png"
                     alt='logo'
                className={styles.logo}/>
            </div>
            <div className="col-7 mt-5">
                {props.text}
            </div>
        </header>
    );
};

export default Banner;