import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartStore/cartAction";

export default function ProductPreview({ product }) {
  const { loggedinUser } = useSelector((state) => state.userModule);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    const userId = loggedinUser ? loggedinUser._id : null;
    dispatch(addToCart(product, userId));
  };

  return (
    <div className="product-preview">
      <img src={product.ProductImage} className="img" />
      <div className="preview">
        <div className="product-ditails">
          <p>{product.ProductTitle}</p>
          <p className="price">{product.Price}</p>
        </div>
        <button
          className="add-to-cart"
          onClick={() => addProduct(product)}
        ></button>
      </div>
    </div>
  );
}
