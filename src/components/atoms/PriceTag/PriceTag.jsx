import styles from "./PriceTag.module.css";

function PriceTag({ value }) {
  const formatted = value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  return <span className={styles.price}>{formatted}</span>;
}

export default PriceTag;
