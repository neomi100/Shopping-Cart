import { useEffect, useState } from "react";
import CartPreview from "./CartPreview";

export default function CartList({ products }) {
  const [productsPage, setProductsPage] = useState(products);
  const [pageIdx, setPageIdx] = useState(0);
  const PAGE_QUANTITY = 6;
  const prices = products.map((p) => p.amount * p.PriceLabel);

  let sum = 0;

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
  }, [pageIdx, products]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }

  return (
    <>
      {products.length > 0 && (
        <div className="shell">
          <ul className="list">
            {productsPage.map((product, idx) => (
              <li key={idx} className="preview-cart preview-container">
                <CartPreview product={product} />
              </li>
            ))}
          </ul>
          <div className="total-price">
            Total price: ${parseFloat(sum.toFixed(2))}
          </div>
          {products.length > 6 && (
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
          )}
        </div>
      )}
    </>
  );
}
