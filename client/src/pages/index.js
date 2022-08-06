import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const { data, isFetching, error } = useFetch(
    "http://localhost:3333/usuarios"
  );

  if (error) return <div>Error: {error.message}</div>;
  if (isFetching || !data) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Usuários:</h1>

      <div>
        {data.map((usuario) => (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px 20px",
              width: "300px",
            }}
          >
            <p>Nome: {usuario.nome}</p>
            <p>Sobrenome: {usuario.sobrenome}</p>
            <p>Email: {usuario.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
