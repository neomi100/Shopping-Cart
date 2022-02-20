import { useEffect } from "react";
import ProductsList from "../cmps/ProductsList";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/productsStore/productsAction";

export default function HomePage() {
  const { products } = useSelector((state) => state.productsModule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
    // console.log('products', products)
  }, [products]);

  if (!products) return <div className="page-loading-screen">Loading...</div>;
  return (
    <div>
      <div className="page">
        <ProductsList products={products} />
      </div>
    </div>
  );
}
