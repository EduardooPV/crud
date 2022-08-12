import styles from "./styles.module.css";

import { GrAdd } from "react-icons/gr";

export function Header({ isOpen, setIsOpen }) {
  return (
    <header className={styles.header}>
      <h1>Lista de usuários:</h1>

      <button onClick={() => setIsOpen(!isOpen)}>
        <GrAdd /> Cadastrar usuário
      </button>
    </header>
  );
}
