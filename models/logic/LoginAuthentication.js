import Users from "../data/Usuarios.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
let loginfunc = async (req, res) => {

    const {
        email,
        senha
    } = req.body;

    const UsersExists = await Users.findOne({
        where: {
            Email: email
        }
    });

    if (!UsersExists) {
        res.status(409).send("User don't exists");
    }
    
    else {

        let comparedsenha = await bcrypt.compare(senha, UsersExists.Senha);

        if (comparedsenha === false) {

            res.send("Wrong senha")

        }
        
        req.session.name = UsersExists.Nome
        req.session.adm = UsersExists.Admin;
        req.session.prof = UsersExists.Professor;
        res.redirect("http://localhost:5050/log");

    }

}

export default loginfunc;