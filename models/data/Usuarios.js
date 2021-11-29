import sequelize from "../../database/connection.js";
import Sequelize from "sequelize";

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    Senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    DataDeNascimento: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Endereço: {
        type: Sequelize.STRING(40),
        allowNull: true
    },
    Telefone: {
        type: Sequelize.STRING(11),
        allowNull: true
    },
    RG: {
        type: Sequelize.STRING(9),
        allowNull: false
    },
    CPF: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    Professor: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false
    },
    Admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false
    },
    VencimentoDoPagamento: {
        type: Sequelize.DATE,
        allowNull: false,
        default: null
    },
    Turma: {
        type: Sequelize.CHAR,
        allowNull: true,
        default: null
    },
    Curso: {
        type: Sequelize.STRING(40),
        allowNull: true,
        default: null
    }

});


export default User;