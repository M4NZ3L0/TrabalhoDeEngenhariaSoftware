import Users from "../data/Usuarios.js";
import bcrypt from "bcrypt";
import {
    sign,
    decode
} from "./jwt.js";
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
    /*  console.log(UsersExists);
     console.log(comparedsenha); */
    if (!UsersExists) {
        res.send("User don't exists");
    } else {
        let comparedsenha = await bcrypt.compare(senha, UsersExists.Senha);
        
        if (comparedsenha === false) {

            res.send("Wrong senha")

        }
        else {
            
            const token = sign({
                Email: email,
                Senha: senha,
                Admin: UsersExists.admin,
                Professor: UsersExists.professor
            });

            if (UsersExists.Professor === true && UsersExists.Admin === false) {
                console.log(token);
                res.render("InicioLogado.ejs", {
                    typeofheader: "./partials/HeaderLogProf.ejs",
                    nome: UsersExists.Nome
                });
            } else if ((UsersExists.Admin === true && UsersExists.Professor === true) || (UsersExists.Admin === true && UsersExists.Professor === false)) {
                console.log(token);
                res.render("InicioLogado.ejs", {
                    typeofheader: "./partials/HeaderLogADM.ejs",
                    nome: UsersExists.Nome
                });
            } else {
                console.log(token);
                res.render("InicioLogado.ejs", {
                    typeofheader: "./partials/HeaderLogAluno.ejs",
                    nome: UsersExists.Nome
                });
            }
        }

    }

}

export default loginfunc;