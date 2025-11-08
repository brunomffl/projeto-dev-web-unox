const tarefasService = require("../service/tarefas-services.js");
let proximoID=2;

exports.CreateTarefas = (req, res) => {
    const { nome, categoriaId } = req.body;
    const usuarioId = req.usuarioLogado.id;
    
    if(!nome){
        return res.status(400).json({message: 'Nome é obrigatório'});
    }
    
    const tarefa = tarefasService.createTarefas(nome, categoriaId, usuarioId);
    
    if(tarefa.error){
        return res.status(400).json({message: tarefa.error});
    }
    
    res.status(201).json(tarefa);
};

exports.getAll = (req, res) => { 
    const usuarioId = req.usuarioLogado.id;
    const isAdmin = req.usuarioLogado.role === 'admin';
    
    const tarefas = tarefasService.getAll(usuarioId, isAdmin);
    res.status(200).json(tarefas);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioId = req.usuarioLogado.id;
    const isAdmin = req.usuarioLogado.role === 'admin';
    
    const tarefa = tarefasService.getById(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
    }
    
    // Verifica se o usuário pode acessar esta tarefa
    if(!isAdmin && tarefa.usuarioId !== usuarioId){
        return res.status(403).json({message: 'Você não tem permissão para acessar esta tarefa'});
    }
    
    res.status(200).json(tarefa);
};

exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    const { categoriaId } = req.body;
    const usuarioId = req.usuarioLogado.id;
    const isAdmin = req.usuarioLogado.role === 'admin';
    
    const tarefa = tarefasService.getById(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
    }
    
    // Verifica se o usuário pode editar esta tarefa
    if(!isAdmin && tarefa.usuarioId !== usuarioId){
        return res.status(403).json({message: 'Você não tem permissão para editar esta tarefa'});
    }
    
    if (categoriaId) {
        const categoriaService = require("../service/categoria-service.js");
        const categoria = categoriaService.getById(categoriaId);
        if(!categoria){
            return res.status(400).json({message: 'Categoria não encontrada'});
        }
        tarefa.categoriaId = categoriaId;
        tarefa.categoria = categoria.nome;
    }
    res.status(200).json(tarefa);
};

exports.updateFull = (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioId = req.usuarioLogado.id;
    const isAdmin = req.usuarioLogado.role === 'admin';
    
    let tarefa = tarefasService.getById(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
    }
    
    // Verifica se o usuário pode editar esta tarefa
    if(!isAdmin && tarefa.usuarioId !== usuarioId){
        return res.status(403).json({message: 'Você não tem permissão para editar esta tarefa'});
    }
    
    const { nome, categoriaId } = req.body;

    if(!nome){
        return res.status(400).json({message: 'Nome é obrigatório'});
    }
    
    tarefa = tarefasService.updateFull(id, nome, categoriaId);
    res.status(200).json({message: 'Tarefa atualizada totalmente com sucesso', tarefa});
};
exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    const usuarioId = req.usuarioLogado.id;
    const isAdmin = req.usuarioLogado.role === 'admin';
    
    const tarefa = tarefasService.getById(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
    }
    
    // Verifica se o usuário pode deletar esta tarefa
    if(!isAdmin && tarefa.usuarioId !== usuarioId){
        return res.status(403).json({message: 'Você não tem permissão para deletar esta tarefa'});
    }
    
    const success = tarefasService.delete(id);

    if (!success){
        return res.status(404).json({message: 'Erro ao deletar tarefa'});
    }
    res.status(200).json({message: 'Tarefa deletada com sucesso'});
};