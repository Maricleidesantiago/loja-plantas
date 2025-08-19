import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import styles from "./PlantIcon.module.css";

function PlantIcon({ size = "md" }) {
  const sizes = { sm: 20, md: 32, lg: 48 };
  return <LocalFloristIcon style={{ fontSize: sizes[size] }} className={styles.icon} />;
}

export default PlantIcon;
