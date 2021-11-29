import Users from "../data/Usuarios.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
        const token = jwt.sign(
            {
                user_id: UsersExists.id,
                user_is_adm: UsersExists.Admin,
                user_is_professor: UsersExists.Professor
            },
            process.env.SECRET,
            {
                expiresIn: "1h"
            }
        )

        res.cookie("access-token", token, { expiresIn: 360000,httpOnly:true });
        res.json({ token });

    }

}

export default loginfunc;