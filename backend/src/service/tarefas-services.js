const tarefasRepository = require("../repository/tarefas-repository.js");
const categoriaService = require("./categoria-service.js");
let proximoID=2;

exports.createTarefas = (nome, categoriaId, usuarioId) => {
    let categoria;
    
    // Se não informou categoria, usa a padrão
    if(!categoriaId){
        categoria = categoriaService.getCategoriaDefault();
    } else {
        categoria = categoriaService.getById(categoriaId);
        if(!categoria){
            return { error: "Categoria não encontrada" };
        }
    }
    
    const tarefa = {
        id: proximoID++, 
        nome: nome, 
        categoriaId: categoria.id,
        categoria: categoria.nome,
        usuarioId: usuarioId
    };
    proximoID++;
    tarefasRepository.insert(tarefa);
    return tarefa;
};

exports.getAll = (usuarioId, isAdmin) => {
    // Se for admin, retorna todas as tarefas
    if(isAdmin){
        return tarefasRepository.getAll();
    }
    // Se for usuário comum, retorna apenas suas tarefas
    return tarefasRepository.getByUsuario(usuarioId);
};

exports.getById = (id) =>{
    return tarefasRepository.getById(id);
};

exports.update = (id, nome, categoria) =>{
    let tarefa = tarefasRepository.update(id, nome, categoria);
    return tarefa;
};

exports.updateFull = (id, nome, categoriaId) => {
    let categoria;
    
    // Se não informou categoria, usa a padrão
    if(!categoriaId){
        categoria = categoriaService.getCategoriaDefault();
    } else {
        categoria = categoriaService.getById(categoriaId);
        if(!categoria){
            return { error: "Categoria não encontrada" };
        }
    }
    
    let tarefa = tarefasRepository.updateFull(id, nome, categoria.id, categoria.nome);
    return tarefa;
};

exports.delete = (id) =>{
    return tarefasRepository.delete(id);
};