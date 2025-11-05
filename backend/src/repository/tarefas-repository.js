let repository = [
    {id: 0, nome: 'trabalho de casa', categoriaId: 1, categoria: 'SEM CATEGORIA'},
    {id: 1, nome: 'user', categoriaId: 1, categoria: 'SEM CATEGORIA'}
]
let proximoID=2;

    exports.insert = (tarefa) =>{
        repository.push(tarefa);
    }
    exports.getAll = () =>{
        return repository;
    }
    exports.getById = (id) => {
        return repository.find(t => t.id === id);
    }
    exports.update = (id, nome, categoriaId, categoria) => {
        const tarefa = this.getById(id);
        if(tarefa){
            if(nome) tarefa.nome = nome;
            if(categoriaId) tarefa.categoriaId = categoriaId;
            if(categoria) tarefa.categoria = categoria;
        }
        return tarefa;
    }  
    exports.updateFull = (id, nome, categoriaId, categoria) => {
        const tarefa = this.getById(id);
        if(tarefa){
            tarefa.nome = nome;
            tarefa.categoriaId = categoriaId;
            tarefa.categoria = categoria;

            const index = repository.findIndex(t => t.id === id);
            if (index !== -1) {
                repository[index] = tarefa;
            }
        }
        return tarefa;
    }
    exports.delete = (id) => {
        const index = repository.findIndex(t => t.id === id);
        if(index !== -1){
            repository.splice(index, 1);
            return true;
        }
        return false;
    };