import { useEffect, useState } from "react";
import ProductPreview from "./ProductPreview";

export default function ProductsList({ products }) {
  const [productsPage, setProductsPage] = useState(products);
  const [pageIdx, setPageIdx] = useState(0);
  const PAGE_QUANTITY = 6;

  useEffect(() => {
    if (
      pageIdx * PAGE_QUANTITY >= products.length ||
      pageIdx + 1 < 0 ||
      pageIdx - 1 < 0
    ) {
      setPageIdx(0);
    }
    const productsForShow = () => {
      var fromIdx = pageIdx * PAGE_QUANTITY;
      var toIdx = fromIdx + PAGE_QUANTITY;
      setProductsPage(products.slice(fromIdx, toIdx));
    };
    productsForShow();
    scrollToTop();
  }, [pageIdx]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <div className="shell">
      <ul className="list">
        {productsPage.map((product) => {
          return (
            <li key={product._id} className="preview-container">
              <ProductPreview product={product} />
            </li>
          );
        })}
      </ul>
      <div className="pagenation">
        {pageIdx >= 1 && (
          <button
            className="prev"
            onClick={() => {
              setPageIdx(pageIdx - 1);
            }}
          ></button>
        )}
        {pageIdx > 0 ? pageIdx + 1 : 1}
        {pageIdx + 1 <= products.length / PAGE_QUANTITY && (
          <button
            className="next"
            onClick={() => {
              setPageIdx(pageIdx + 1);
            }}
          ></button>
        )}
      </div>
    </div>
  );
}
