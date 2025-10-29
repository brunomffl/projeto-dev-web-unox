const tarefasRepository = require("../repository/tarefas-repository.js");
let proximoID=2;

exports.createTarefas = (nome, categoria) =>{
    const tarefa = {id: proximoID++, nome: nome, categoria: categoria};
    proximoID++;
    tarefasRepository.insert(tarefa);
    return tarefa;
};

exports.getAll = () =>{
    return tarefasRepository.getAll();
};

exports.getById = (id) =>{
    return tarefasRepository.getById(id);
};

exports.update = (id, nome, categoria) =>{
    let tarefa = tarefasRepository.update(id, nome, categoria);
    return tarefa;
};

exports.updateFull = (id, nome, categoria) =>{
    let tarefa = tarefasRepository.updateFull(id, nome, categoria);
    return tarefa;
};

exports.delete = (id) =>{
    return tarefasRepository.delete(id);
};