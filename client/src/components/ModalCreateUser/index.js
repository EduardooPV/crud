import { useState } from "react";
import { api } from "../../service/api";

import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.css";

export function ModalCreateUser({ isOpen, setIsOpen }) {
  const [confirmAction, setConfirmAction] = useState(false);

  const [values, setValues] = useState();

  function handleChangeValues(value) {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  }

  function handleCreateUser() {
    api
      .post("/usuarios", {
        nome: values?.nome,
        sobrenome: values?.sobrenome,
        email: values?.email,
        profissao_id: values?.profissao_id,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Usuário cadastrado com sucesso!");
          setIsOpen(false);
          setConfirmAction(false);
        }
      })
      .catch((err) => {
        err && toast.error("Não foi possivel cadastrar o usuário");
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
        <form className={styles.container}>
          <div className={styles.form}>
            <header>
              <p>Criar usuário</p>

              <button onClick={closeModal}>
                <AiOutlineClose fontSize={22} />
              </button>
            </header>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={handleChangeValues}
            />
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              placeholder="Sobrenome"
              onChange={handleChangeValues}
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              onChange={handleChangeValues}
            />
            <label htmlFor="profissao_id">Profissão ID</label>
            <input
              type="text"
              name="profissao_id"
              placeholder="Profissao_ID"
              onChange={handleChangeValues}
            />

            <div className={styles.containerButtons}>
              <button type="button" onClick={closeModal}>
                Cancelar
              </button>
              <button type="button" onClick={openModal}>
                Criar usuário
              </button>
            </div>
            {confirmAction && (
              <div className={styles.containerConfirmation}>
                <div>
                  <p>Deseja criar o usuário?</p>
                  <div className={styles.containerButtonsConfirmation}>
                    <button onClick={closeConfirmation}>Não</button>
                    <button type="submit" onClick={() => handleCreateUser()}>
                      Sim
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      )}
      <ToastContainer />
    </>
  );
}
