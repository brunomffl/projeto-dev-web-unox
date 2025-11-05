const categoriaRepository = require("../repository/categoria-repository.js");

exports.createCategoria = (nome, descricao) => {
    // Verifica se já existe uma categoria com esse nome
    const categoriaExistente = categoriaRepository.getByNome(nome);
    if(categoriaExistente){
        return { error: "Categoria já existe" };
    }
    
    const categoria = {
        id: categoriaRepository.getProximoID(), 
        nome: nome, 
        descricao: descricao || ""
    };
    categoriaRepository.insert(categoria);
    return categoria;
};

exports.getAll = () => {
    return categoriaRepository.getAll();
};

exports.getById = (id) => {
    return categoriaRepository.getById(id);
};

exports.getByNome = (nome) => {
    return categoriaRepository.getByNome(nome);
};

exports.update = (id, nome, descricao) => {
    return categoriaRepository.update(id, nome, descricao);
};

exports.updateFull = (id, nome, descricao) => {
    return categoriaRepository.updateFull(id, nome, descricao);
};

exports.delete = (id) => {
    // Não permite deletar a categoria padrão "SEM CATEGORIA"
    if(id === 1){
        return { error: "Não é possível deletar a categoria padrão" };
    }
    return categoriaRepository.delete(id);
};

exports.getCategoriaDefault = () => {
    return categoriaRepository.getById(1); // "SEM CATEGORIA"
};
