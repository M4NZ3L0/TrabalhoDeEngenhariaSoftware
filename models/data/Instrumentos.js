import sequelize from "../../database/connection.js";
import Sequelize from "sequelize";

const Instrument = sequelize.define("instruments", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING(40),
        allowNull: false
    },
    Código: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    TamanhoCms: {
        type: Sequelize.STRING(3),
        allowNull: false
    },
    PesoKgs: {
        type: Sequelize.STRING(3),
        allowNull: true
    }
});

export default Instrument;