import styles from "./Button.module.css";

function Button({ variant = "primary", children, ...props }) {
  const buttonClass = variant === "secondary" ? styles.secondary : styles.primary;
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
