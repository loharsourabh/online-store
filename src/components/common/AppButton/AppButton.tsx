import styles from "./AppButton.module.css";

export default function AppButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`${styles.appButton} ${className}`}>
      {children}
    </button>
  );
}
