import UserModel from "../../data/Usuarios.js";
import bcrypt from "bcrypt";

// Create and Save a new UserModel
export const create = async (req, res) => {

  const emailexist = await UserModel.findOne({
    where: {
      email: req.body.email
    }
  });
  const cpfexist = await UserModel.findOne({
    where: {
      CPF: req.body.cpf
    }
  });
  const rgexist = await UserModel.findOne({
    where: {
      RG: req.body.rg
    }
  });

  if (!req.body.email) {
    res.status(400).send({
      message: "Não é permitido email nulo"
    });
  } else if (emailexist) {
    res.status(400).send({
      message: "Email já existe"
    });
  } else if (cpfexist) {
    res.status(400).send({
      message: "CPF já existe"
    })
  } else if (rgexist) {
    res.status(400).send({
      message: "Rg já existe"
    })
  } else {
    
    const hashPassword = bcrypt.hashSync(req.body.senha, 10);

    const user = {
      Nome: req.body.nome,
      Senha: hashPassword,
      Email: req.body.email,
      DataDeNascimento: req.body.datadenascimento,
      Endereço: req.body.endereço,
      Telefone: req.body.telefone,
      RG: req.body.rg,
      CPF: req.body.cpf,
      Professor: req.body.professor,
      Admin: req.body.admin,
      VencimentoDoPagamento: req.body.vencimentopagamento,
      Turma: req.body.turma,
      Curso: req.body.curso
    };

    return UserModel.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message 
        });
      });
  }

};

// Retrieve all UserModels from the database.
export const findAll = (req, res) => {
  UserModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message 
      });
    });
};

// Find a single UserModel with an id
export const findOne = (req, res) => {
  const id = req.params.id;

  UserModel.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find UserModel with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving UserModel with id=" + id
      });
    });

};

// Update a UserModel by the id in the request
export const update = (req, res) => {
  const id = req.params.id;

  UserModel.update(req.body, {
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserModel was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update UserModel with id=${id}. Maybe UserModel was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating UserModel with id=" + id
      });
    });
};

// Delete a UserModel with the specified id in the request
export const del = (req, res) => {
  const id = req.params.id;

  UserModel.destroy({
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "UserModel was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete UserModel with id=${id}. Maybe UserModel was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete UserModel with id=" + id
      });
    });
};

// Delete all UserModels from the database.
export const deleteAll = (req, res) => {
  UserModel.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
      res.send({
        message: `${nums} UserModels were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message 
      });
    });
};

export const findAllStudents = (req, res) => {
  UserModel.findAll({
  where: {
    Professor: false,
    Admin: false
  }
})
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: err.message 
      });
    });
};

export const findAllTeachers = (req, res) => {
  UserModel.findAll({where: {Professor: true, Admin: false}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message 
      });
    });
};