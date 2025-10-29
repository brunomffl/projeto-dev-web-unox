let repository = [
    {id: 0, nome: 'trabalho de casa', categoria: 'tarefas'},
    {id: 1, nome: 'user', categoria: 'comum'}
]
let proximoID=2;

    exports.insert = (tarefa) =>{
        repository.push(tarefa);
    }
    exports.getAll = () =>{
        return repository;
    }
    exports.getById = (id) =>{
        return usuarios.find(u => u.id === id);
    }
    exports.update = (id, tarefa) =>{
        const repositorio = this.getById(id);
        if(repositorio){
            repositorio.nome = dados.nome;
            repositorio.categoria = dados.categoria;
        }
        return repositorio;
    }  
    exports.updateFull = (id, tarefa) =>{
        const repositorio = this.getById(id);
        if(repositorio){
            repositorio.nome = dados.nome;
            repositorio.categoria = dados.categoria;

            const index = repositorio.findIndex(u => u.id === id);
        if (index !== -1) {
            repository[index] = repositorio;
        }
        }

    }
    exports.delete = (id) =>{
        const index = repository.findIndex(u => u.id === id);
        if(index !== 1){
            repository.splice(index, 1);
    }
};