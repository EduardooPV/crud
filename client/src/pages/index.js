import { useState } from "react";
import { Modal } from "../components/ModalCreateUser";
import { TableUsers } from "../components/TableUsers";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isFetching, error } = useFetch(
    "http://localhost:3333/usuarios"
  );

  if (error) return <div>Error: {error.message}</div>;
  if (isFetching || !data) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Usuários:</h1>

      <button onClick={() => setIsOpen(!isOpen)}>Cadastrar usuário</button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      <TableUsers users={data} />
    </div>
  );
}
