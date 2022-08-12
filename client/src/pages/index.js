import { useState } from "react";

import { Header } from "../components/Header";
import { ModalCreateUser } from "../components/ModalCreateUser";
import { TableUsers } from "../components/TableUsers";

import styles from "./index.module.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.container}>
      <section className={styles.section}>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <ModalCreateUser isOpen={isOpen} setIsOpen={setIsOpen} />

        <TableUsers />
      </section>
    </main>
  );
}
