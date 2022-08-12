import { useState } from "react";
import { api } from "../../service/api";

export function Modal({ isOpen, setIsOpen }) {
  const [confirmAction, setConfirmAction] = useState(false);

  const [values, setValues] = useState();

  function handleChangeValues(value) {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  function handleCreateUser(event) {
    event.preventDefault();
    api.post("/usuarios", {
      nome: values?.nome,
      sobrenome: values?.sobrenome,
      email: values?.email,
      profissao_id: values?.profissao_id,
    });
  }

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
