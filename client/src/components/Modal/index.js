import { useState } from "react";
import { useUsers } from "../../context/users";

export function Modal({ isOpen, setIsOpen }) {
  const { handleCreateUser, handleChangeValues } = useUsers();
  const [confirmAction, setConfirmAction] = useState(false);

  function openModal() {
    setConfirmAction(true);
  }

  function closeModal() {
    setConfirmAction(false);
  }

  return (
    <>
      {isOpen && (
        <form>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={handleChangeValues}
            required
            minLength={5}
          />
          <input
            type="text"
            name="sobrenome"
            placeholder="Sobrenome"
            onChange={handleChangeValues}
            minLength={1}
          />
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={handleChangeValues}
            minLength={1}
          />
          <input
            type="text"
            name="profissao_id"
            placeholder="Profissao_ID"
            onChange={handleChangeValues}
            minLength={1}
          />

          <button type="button" onClick={closeModal}>
            Cancelar
          </button>
          <button type="button" onClick={openModal}>
            Criar usuário
          </button>
          {confirmAction && (
            <>
              <p>Deseja criar um novo usuário?</p>
              <button
                type="submit"
                onClick={(event) => handleCreateUser(event)}
              >
                Criar
              </button>
              <button onClick={closeModal}>Cancelar</button>
            </>
          )}
        </form>
      )}
    </>
  );
}
