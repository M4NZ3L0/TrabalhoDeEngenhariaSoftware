import sequelize from "../../database/connection.js";
import Sequelize from "sequelize";

const Course = sequelize.define("courses", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Curso: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Professores: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    Horários: {
        type: Sequelize.DATE,
        allowNull: false
    },
    AlunosMatriculados: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

export default Course;