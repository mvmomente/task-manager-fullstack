import { createTask, getTask, deleteTask, updateTask } from '../model/task.js'

export const taskCreate = async (req, res) => {
    const {title, description, user_id} = req.body;

    try {
        const taskId = await createTask({title, description, user_id});
        res.status(201).json({message: 'Tarefa criada com sucesso.'})
    } catch (error) {
        res.status(500).json({message: 'Erro ao criar a tarefa.', error: error.message})
    }
};

export const taskList = async (req, res) => {
    try {
        const tasks = await getTask();
        if (tasks.length > 0) {
            res.status(200).json(tasks);
        } else {
            res.status(404).json({message: 'Nenhuma tarefa encontrada.'});
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar tarefas.', error: error.message});
    }
};

export const taskDelete = async (req, res) => {
    const taskId = req.params.id;

    try {
        const taskDelete = await deleteTask(taskId);
        if (taskDelete > 0) {
            res.status(200).json({message: 'Tarefa deletada com sucesso.'})
        } else {
            res.status(404).json({message: 'Nenhuma tarefa encontrada.'})
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar tarefa.', error: error.message})
    }
}

export const taskUpdate = async (req, res) => {
    try {
        const {title, description, user_id} = req.body;
        const taskId = await updateTask({id: req.params.id, title, description, user_id})

        if (taskId > 0) {
            res.status(200).json({message: 'Tarefa editada com sucesso.'});
        } else {
            res.status(404).json({message: 'Tarefa não encontrada.'});
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao editar tarefa.', error: error.message})
    }
};