import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImg = ({ img = "" }) => {
    console.log('ProductImg')
    const {product} = useContext(ProductContext);
    return (
      <img
        className={styles.productImg}
        src={img || product.img || noImage}
        alt="Product img "
      />
    );
  };