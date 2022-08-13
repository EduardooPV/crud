import { useState } from "react";
import { api } from "../../service/api";
import { useFetch } from "../../hooks/useFetch";
import { Modal } from "../ModalUpdateUser";

import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";

import styles from "./styles.module.css";

export function TableUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  const { data, isFetching, error } = useFetch(
    "http://localhost:3333/usuarios"
  );

  if (error) return <div>Error: {error.message}</div>;
  if (isFetching || !data) return <p>Carregando...</p>;

  function handleDeleteUser(userEmail) {
    api.delete(`/usuarios/${userEmail}`);
  }

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tabletitle}>
          <tr>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>E-mail</td>
            <td>Profissão ID</td>
            <td></td>
          </tr>
        </thead>
        <tbody className={styles.tablebody}>
          {data.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.sobrenome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.profissao_id}</td>
              <td className={styles.containerButton}>
                <button onClick={() => handleDeleteUser(usuario.email)}>
                  <AiFillDelete color="red" fontSize={18} />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setUser(usuario);
                  }}
                >
                  <AiTwotoneEdit color="white" fontSize={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
    </>
  );
}
