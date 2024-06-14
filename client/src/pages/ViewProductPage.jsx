import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../App";
import products from "../data/products.js";

function ViewProductPage() {
  const navigate = useNavigate();
  const userContext = useContext(Context);

  const { id } = useParams();
  const product = products.find((param) => param.id === parseInt(id));

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>

      <div className="product-promotion-box">
        <h2>
          คุณคือสมาชิกในระดับ {userContext.level} ดังนั้นคุณได้สิทธิพิเศษลด 50%
        </h2>
        <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ์</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
