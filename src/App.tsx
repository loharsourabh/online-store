import { useSelector } from "react-redux";
import styles from "./App.module.css";
import ProductsPage from "./components/pages/ProductsPage/ProductsPage";
import { RootState } from "./store/store";

export default function App() {
  const cart = useSelector((state: RootState) => state.productPage.cart);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div className={styles.cartIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM180,192a12,12,0,1,1-12,12A12,12,0,0,1,180,192Zm-96,0a12,12,0,1,1-12,12A12,12,0,0,1,84,192Z"></path>
          </svg>
          <div className={styles.cartItemCount}>{cart.length}</div>
        </div>
      </div>
      <ProductsPage />
    </div>
  );
}
