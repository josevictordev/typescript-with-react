import { Api } from '../ApiConfig';
import { ApiException } from '../ApiException';

export interface Tarefa {
  id: string;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<Tarefa[] | ApiException> => {
  try {
    const { data } = await Api().get('/tarefas');
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro consultar tarefas');
  }
};

const getById = async (id: string): Promise<Tarefa | ApiException> => {
  try {
    const { data } = await Api().get(`/tarefas/${id}`);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao buscar tarefa');
  }
};

const create = async (
  dataCreate: Omit<Tarefa, 'id'>,
): Promise<Tarefa | ApiException> => {
  try {
    const { data } = await Api().post('/tarefas', dataCreate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao criar tarefa');
  }
};

const update = async (
  id: string,
  dataToUpdate: Tarefa,
): Promise<Tarefa | ApiException> => {
  try {
    const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
    return data;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao atualizar a tarefa');
  }
};

const deleteById = async (id: string): Promise<undefined | ApiException> => {
  try {
    await Api().delete(`/tarefas/${id}`);
    return undefined;
  } catch (error: any) {
    return new ApiException(error.message || 'Erro ao excluir a tarefa');
  }
};

export const TarefasServices = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
