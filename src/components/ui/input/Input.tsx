import styles from "./Input.module.scss";

interface IInput {
  placeholder: string;
  type: string;
}

export default function Input(props: IInput) {
  return <input {...props} className={`${styles.input}`}type="text" />;
}
