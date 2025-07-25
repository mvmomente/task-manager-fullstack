import { createUser, deleteUser, getUsers, updateUser } from '../model/user.js';

export const createUserController = async (req, res) => {
    const {name, email, password } = req.body;

    try {
        const userId = await createUser({name, email, password});
        res.status(201).json({id: userId, message: 'Usuário criado com sucesso.'})
    } catch (error) {
        res.status(500).json({message: 'Erro ao criar o usuário.', error: error.message});
    }
};

export const getUsersController = async (req, res) => {
    try {
        const users = await getUsers();

        if (users.length > 0 ) {
            res.status(200).json(users)
        } else {
            res.status(404).json({message: 'Nenhum usuário encontrado.'});
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao buscar usuários.', error: error.message});
    }
}

export const deleteUserController = async (req, res) => {
    const userId = req.params.id;

    try {
        const userDelete = await deleteUser(userId);

        if (userDelete > 0) {
            res.status(200).json({message: 'Usuário deletado.'})
        } else {
            res.status(404).son({message: 'Nenhum usuário encontrado.'})
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao deletar o usuário', error: error.message});
    }
}

export const updateUserController = async (req, res) => {
    const userId = req.params.id;

    try {
        const {name, email, password} = req.body;
        const updateUserr = await updateUser({id: userId, name, email, password});

        if (updateUserr > 0) {
            res.status(201).json({id: userId, message: 'Usuário alterado com sucesso.'})
        } else {
            res.status(404).json({id: userId, message: 'Nenhum usuário encontrado.'})
        }
    } catch (error) {
        res.status(500).json({message: 'Erro ao alterar o usuário.', error: error.message});
    }
}