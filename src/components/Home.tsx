import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="banner-container">
                    <div className="banner">
                        <h2>It's time for some Cocktails, estas en home!</h2>
                        <Link to="/about">
                            <div className="btn">About</div>
                        </Link>
                        <Link to="/products">
                            <div className="btn">Products</div>
                        </Link>
                    </div>
                </div>           
            </div>
        </>
    );
};
