import { useNavigate, useParams } from "react-router-dom";
import { useContext, useSyncExternalStore } from "react";
import { UserContext } from "../App";
import { ProductsContext } from "../App";
import { useState, useEffect } from "react";

function ViewProductPage() {
  const { level } = useContext(UserContext);
  const products = useContext(ProductsContext);
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const foundProduct = products.find(
      (product) => product.id === Number(params.id)
    );
    setProduct(foundProduct);
  }, [params.id]);
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <img src={product.image} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>

      <div className="product-promotion-box">
        <h2>คุณคือสมาชิกในระดับ {level} ดังนั้นคุณได้สิทธิพิเศษลด 50%</h2>
        <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
