import { useUsers } from "../../context/users";
export function TableUsers({ users }) {
  const { handleDeleteUser, handleEditUser } = useUsers();

  return (
    <table>
      {users.map((usuario) => (
        <>
          <thead>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>E-mail</th>
            <th>Profissão ID</th>
          </thead>

          <tbody>
            <td>{usuario.nome}</td>
            <td>{usuario.sobrenome}</td>
            <td>{usuario.email}</td>
            <td>{usuario.profissao_id}</td>
            <td>
              <button onClick={() => handleDeleteUser(usuario.id)}>
                Excluir usuário
              </button>
              <button onClick={() => handleEditUser(usuario.id)}>
                Editar usuário
              </button>
            </td>
          </tbody>
        </>
      ))}
    </table>
  );
}
