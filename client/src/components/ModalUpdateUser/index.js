import { useState } from "react";
import { api } from "../../service/api";
import { useFetch } from "../../hooks/useFetch";

export function Modal({ isOpen, setIsOpen, user }) {
  const [confirmAction, setConfirmAction] = useState(false);

  const [nome, setNome] = useState(user.nome);
  const [sobrenome, setSobrenome] = useState(user.sobrenome);
  const [email, setEmail] = useState(user.email);

  function handleEditUser(event) {
    event.preventDefault();
    api.put(`/usuarios/${user.id}`, {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
    });
  }

  function openModal() {
    setConfirmAction(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function closeConfirmation() {
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
            onChange={(event) => setNome(event.target.value)}
            value={nome}
            required
            minLength={5}
          />
          <input
            type="text"
            name="sobrenome"
            onChange={(event) => setSobrenome(event.target.value)}
            value={sobrenome}
            placeholder="Sobrenome"
            minLength={1}
          />
          <input
            type="text"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
            minLength={1}
          />
          {/* <input
            type="text"
            name="profissao_id"
            value={user.profissao_id}
            placeholder="Profissao_ID"
            onChange={handleChangeValues}
            minLength={1}
          /> */}

          <button type="button" onClick={closeModal}>
            Cancelar
          </button>
          <button type="button" onClick={openModal}>
            Atualizar usuário
          </button>
          {confirmAction && (
            <>
              <p>Deseja atualizar um novo usuário?</p>
              <button type="submit" onClick={(event) => handleEditUser(event)}>
                Atualizarr
              </button>
              <button onClick={closeConfirmation}>Cancelar</button>
            </>
          )}
        </form>
      )}
    </>
  );
}
