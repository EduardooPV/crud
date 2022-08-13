import { useEffect, useState } from "react";
import { api } from "../../service/api";

import styles from "./styles.module.css";

export function Modal({ isOpen, setIsOpen, user }) {
  const [confirmAction, setConfirmAction] = useState(false);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [profissaoId, setProfissaoId] = useState("");

  useEffect(() => {
    api.get(`/usuarios/${user.email}`).then((response) => {
      const data = response.data.data[0];

      if (data) {
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setProfissaoId(data.profissao_id);
      }
    });
  }, [isOpen]);

  function handleEditUser(event) {
    event.preventDefault();
    api.put(`/usuarios/${user.email}`, {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      profissao_id: profissaoId,
    });
    setIsOpen(false);
    setConfirmAction(false);
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
        <form className={styles.container}>
          <div className={styles.form}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={(event) => setNome(event.target.value)}
              value={nome}
            />
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              onChange={(event) => setSobrenome(event.target.value)}
              value={sobrenome}
              placeholder="Sobrenome"
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="profissao_id">Profissão ID</label>
            <input
              type="text"
              name="profissao_id"
              value={profissaoId}
              placeholder="Profissao_ID"
              onChange={(event) => setProfissaoId(event.target.value)}
            />
            <div className={styles.containerButtons}>
              <button type="button" onClick={closeModal}>
                Cancelar
              </button>
              <button type="button" onClick={openModal}>
                Atualizar
              </button>
            </div>
            {confirmAction && (
              <div className={styles.containerConfirmation}>
                <div>
                  <p>Deseja atualizar o usuário?</p>
                  <div className={styles.containerButtonsConfirmation}>
                    <button onClick={closeConfirmation}>Não</button>
                    <button
                      type="submit"
                      onClick={(event) => handleEditUser(event)}
                    >
                      Sim
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      )}
    </>
  );
}
