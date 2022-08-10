import { createContext, useContext, useState } from "react";
import { api } from "../service/api";

const Users = createContext();

export function UsersProvider({ children }) {
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

  function handleDeleteUser(UserID) {
    api.delete(`/usuarios/${UserID}`);
  }

  function handleEditUser(UserID) {
    api.put(`/usuarios/${UserID}`, {
      nome: values?.nome,
      sobrenome: values?.sobrenome,
      email: values?.email,
    });
  }

  return (
    <Users.Provider
      value={{
        handleChangeValues,
        handleCreateUser,
        handleDeleteUser,
        handleEditUser,
        setValues,
      }}
    >
      {children}
    </Users.Provider>
  );
}

export function useUsers() {
  return useContext(Users);
}
