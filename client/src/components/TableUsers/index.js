import { api } from "../../service/api";
import { useState } from "react";
import { Modal } from "../ModalUpdateUser";

export function TableUsers({ users }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});

  function handleDeleteUser(UserID) {
    api.delete(`/usuarios/${UserID}`);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Sobrenome</td>
            <td>E-mail</td>
            <td>Profissão ID</td>
          </tr>
        </thead>
        <tbody>
          {users.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.sobrenome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.profissao_id}</td>
              <td>
                <button onClick={() => handleDeleteUser(usuario.id)}>
                  Excluir usuário
                </button>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    setUser(usuario);
                  }}
                >
                  Editar usuário
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
