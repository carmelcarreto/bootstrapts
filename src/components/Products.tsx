import { useNavigate } from 'react-router-dom';

export const Products = () => {
   const navigate = useNavigate();

   return (
      <>
         <div className="container">
            <button className="btn" onClick={() => navigate(-1)}>
               Go Back
            </button>
            <div className="title">
               <h1> You are on the products page ask for a CockTail!</h1>
               <div className="products-container">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                        eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
                        aliquid ratione facere enim eveniet modi necessitatibus quas
                        asperiores pariatur, amet velit?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                        eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
                        aliquid ratione facere enim eveniet modi necessitatibus quas
                        asperiores pariatur, amet velit?
                    </p>
                </div>
            </div>
         </div>
      </>
   );
};
