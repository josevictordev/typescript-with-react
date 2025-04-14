import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Tarefa,
  TarefasServices,
} from '../../shared/services/api/tarefas/TarefasServices';
import { ApiException } from '../../shared/services/api/ApiException';

export const Dashboard = () => {
  const navigate = useNavigate();

  const [list, setList] = React.useState<Tarefa[]>([]);

  const addToList: React.KeyboardEventHandler<HTMLInputElement> =
    React.useCallback((e) => {}, []);

  React.useEffect(() => {
    TarefasServices.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setList(result);
      }
    });
  }, []);

  function handleClick() {
    navigate('/entrar');
  }

  return (
    <div>
      <form>
        <label>Nova Tarefa</label>
        <input type="text" />
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <p>Dashboard</p>
      <button type="button" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
