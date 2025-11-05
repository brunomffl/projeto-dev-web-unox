const tarefasService = require("../service/tarefas-services.js");
let proximoID=2;

exports.CreateTarefas = (req, res) => {
    const { nome, categoriaId } = req.body;
    
    if(!nome){
        return res.status(400).json({message: 'Nome é obrigatório'});
    }
    
    const tarefa = tarefasService.createTarefas(nome, categoriaId);
    
    if(tarefa.error){
        return res.status(400).json({message: tarefa.error});
    }
    
    res.status(201).json(tarefa);
};

exports.getAll = (req, res) =>{ 
    const tarefas = tarefasService.getAll(req, res);
    res.status(201).json(tarefas);
};

exports.getById = (req, res) =>{
    const id = parseInt(req.params.id);
    const tarefa = tarefasService.getById(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
    }
    res.status(201).json(tarefa);
}

exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    const { categoriaId } = req.body;
    const tarefa = tarefasService.getById(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
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

exports.updateFull = (req, res) =>{
    const id = parseInt(req.params.id);
    let tarefa;
    tarefa = tarefasService.getById(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
    }
    const { nome, categoria } = req.body;

    if(!nome){
        return res.status(400).json({message: 'Nome é obrigatório'});
    }
    
    const { categoriaId } = req.body;
    tarefa = tarefasService.updateFull(id, nome, categoriaId);
    res.status(200).json({message: 'Tarefa atualizada totalmente com sucesso', tarefa});

}
exports.delete = (req, res) =>{
    const id = parseInt(req.params.id);
    const sucess = tarefasService.delete(id);

    if (sucess){
        return res.status(404).json({message: 'Usuario não encontrado'});
    }
    res.status(200).json({message: 'Tarefa deletada com sucesso'});
};