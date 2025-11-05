const categoriaService = require("../service/categoria-service.js");

exports.CreateCategoria = (req, res) => {
    const { nome, descricao } = req.body;
    
    if(!nome){
        return res.status(400).json({message: 'Nome é obrigatório'});
    }
    
    const categoria = categoriaService.createCategoria(nome, descricao);
    
    if(categoria.error){
        return res.status(400).json({message: categoria.error});
    }
    
    res.status(201).json(categoria);
};

exports.getAll = (req, res) => { 
    const categorias = categoriaService.getAll();
    res.status(200).json(categorias);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.id);
    const categoria = categoriaService.getById(id);
    if(!categoria){
        return res.status(404).json({message: 'Categoria não encontrada'});
    }
    res.status(200).json(categoria);
};

exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, descricao } = req.body;
    const categoria = categoriaService.getById(id);
    if(!categoria){
        return res.status(404).json({message: 'Categoria não encontrada'});
    }
    
    if (nome) {
        categoria.nome = nome;
    }
    if (descricao) {
        categoria.descricao = descricao;
    }
    
    res.status(200).json(categoria);
};

exports.updateFull = (req, res) => {
    const id = parseInt(req.params.id);
    let categoria;
    categoria = categoriaService.getById(id);
    if(!categoria){
        return res.status(404).json({message: 'Categoria não encontrada'});
    }
    const { nome, descricao } = req.body;

    if(!nome){
        return res.status(400).json({message: 'Nome é obrigatório'});
    }
    
    categoria = categoriaService.updateFull(id, nome, descricao);
    res.status(200).json({message: 'Categoria atualizada totalmente com sucesso', categoria});
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    const result = categoriaService.delete(id);

    if (result.error){
        return res.status(400).json({message: result.error});
    }
    
    if (!result){
        return res.status(404).json({message: 'Categoria não encontrada'});
    }
    
    res.status(200).json({message: 'Categoria deletada com sucesso'});
};
