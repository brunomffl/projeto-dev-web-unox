import { UserService } from "../service/user-service.js";

class UserController {

    constructor(){
        this.userService = new UserService();
    }

    create(req, res){
        if(!req.body.nome && !req.body.email){
            return res.status(400).json({ message: "Nome ou e-mail não foram informados" });
        }
        const { nome, email, role } = req.body;
        this.userService.create(nome, email, role);

        return res.status(201).json({ message: "Usuário criado com sucesso!" });
    }

    login(req, res){
        if (!req.body || !req.body.email) {
            return res.status(400).json({ message: "Email é obrigatório" });
        }
        
        const { email } = req.body;
        const usuario = this.userService.login(email); //vai armazenar o email aqui
        
        if (usuario) {
            const role = usuario.role || "user";
            req.session.usuarioLogado = {id: usuario.id, role: role};

            res.json({message: `Usuário: ${email} Login realizado com sucesso - role: ${role}`});
        } else {
            res.status(401).json({message: "Usuário não encontrado"});
        }
    }
};

export { UserController };