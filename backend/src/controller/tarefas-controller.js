const tarefasRepository = require("../repository/tarefas-repository.js");
let proximoID=2;

exports.CreateTarefas = (req, res) =>{
    const { nome, categoria } = req.body;
    const tarefa = tarefasService.createTarefas(nome, categoria);
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

exports.update = (req, res) =>{
    const id = parseInt(req.params.id);
    const {categoria} = req.body;
    const tarefa = tarefasService.getByID(id);
    if(!tarefa){
        return res.status(404).json({message: 'Tarefa não encontrada'});
    }if (categoria) {
        tarefa.categoria = categoria;;
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
    }if(!categoria){
        return res.status(400).json({message: 'Categoria é obrigatória'});
    }
    tarefa = tarefasService.updateFull(id, nome, categoria);
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