import styles from './ProductsPage.module.css';
import { productData } from "../../../api/productData";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, removeProductFromCart } from "./productsPageSlice";
import type { RootState } from "../../../store/store";
import type { Product } from './productsPageSlice';
import AppButton from "../../common/AppButton/AppButton";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.productPage.cart);

  function handleAddToCart(product: Product) {
    const alreadyAdded = cart.some(({name}) => name === product.name);

    if (alreadyAdded === false) {
      console.log('added: ', product);
      console.log('cart: ', cart);
    }

    dispatch(addProductToCart(product));
  }

  function handleRemoveFromCart(product: Product) {
    const isProductInCart = cart.some(({name}) => name === product.name);

    if (isProductInCart) {
      console.log('removed: ', product);
      console.log('cart: ', cart);
    }

    dispatch(removeProductFromCart(product));
  }

  return (
    <div>
      {productData.data.map((productGroup) => (
        <div key={productGroup.name}>
          <h2 className={styles.productGroupName}>{productGroup.name}</h2>
          <div className={styles.productGroupList}>
            {productGroup.productList.map((product) => (
              <div key={product.name} className={styles.product}>
                <div>
                  <p className={styles.productName}>Name: {product.name}</p>
                  <p className={styles.productPrice}>Price: {product.price}</p>
                </div>

                <div className={styles.productButtons}>
                  <AppButton
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to the cart
                  </AppButton>
                  <AppButton
                    onClick={() => handleRemoveFromCart(product)}
                  >
                    Remove from cart
                  </AppButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
