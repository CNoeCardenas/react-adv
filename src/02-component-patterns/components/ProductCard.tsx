import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import { ProductImg } from "./ProductImg";
import { ProductContextProps, Props } from "../interfaces/ProductInterface";
import { ProductButtons } from "./ProductButtons";
import { ProductTitle } from "./ProductTitle";


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
