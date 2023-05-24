import { Navigate, useNavigate } from "react-router";

export const Products = () => {
const navigate = useNavigate();
 return (
   <>
    <div className="container">
       <div className="title">
          <h1>Order Product CockTails</h1>
       </div>
       <button className="btn" onClick={() => Navigate('order-summary')}>
            Place Order
       </button>
       <button className="btn" onClick={() => navigate(-1)}>
            Go Back
        </button>
      </div>
   </>
 );
};