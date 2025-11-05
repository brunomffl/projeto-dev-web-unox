let repository = [
    {id: 1, nome: 'SEM CATEGORIA', descricao: 'Categoria padrão para tarefas sem categoria específica'}
];
let proximoID = 2;

exports.insert = (categoria) => {
    repository.push(categoria);
};

exports.getAll = () => {
    return repository;
};

exports.getById = (id) => {
    return repository.find(c => c.id === id);
};

exports.getByNome = (nome) => {
    return repository.find(c => c.nome.toLowerCase() === nome.toLowerCase());
};

exports.update = (id, nome, descricao) => {
    const categoria = this.getById(id);
    if(categoria){
        categoria.nome = nome;
        categoria.descricao = descricao;
    }
    return categoria;
};

exports.updateFull = (id, nome, descricao) => {
    const categoria = this.getById(id);
    if(categoria){
        categoria.nome = nome;
        categoria.descricao = descricao;
        
        const index = repository.findIndex(c => c.id === id);
        if (index !== -1) {
            repository[index] = categoria;
        }
    }
    return categoria;
};

exports.delete = (id) => {
    const index = repository.findIndex(c => c.id === id);
    if(index !== -1){
        repository.splice(index, 1);
        return true;
    }
    return false;
};

exports.getProximoID = () => {
    return proximoID++;
};
