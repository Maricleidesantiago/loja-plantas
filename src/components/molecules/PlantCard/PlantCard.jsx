import React from "react";
import styles from "./PlantCard.module.css";
import PlantIcon from "../../atoms/PlantIcon/PlantIcon";
import PriceTag from "../../atoms/PriceTag/PriceTag";
import Button from "../../atoms/Button/Button";

function PlantCard({ plant }) {
  const { name, price, light, image } = plant;

  return (
    <div className={styles.card}>
      {/* Mostra a imagem da planta */}
      <img src={image} alt={name} className={styles.image} />

      {/* Ícone da planta */}
      <PlantIcon size="lg" />

      <h2 className={styles.title}>{name}</h2>

      {/* Preço formatado */}
      <PriceTag value={price} />

      {/* Sol ou sombra */}
      <span className={`${styles.light} ${light === "sun" ? styles.sun : styles.shade}`}>
        {light === "sun" ? "☀️ Sol" : "🌙 Sombra"}
      </span>

      {/* Botão de ação */}
      <Button variant="primary">Adicionar ao carrinho</Button>
    </div>
  );
}

export default PlantCard;
