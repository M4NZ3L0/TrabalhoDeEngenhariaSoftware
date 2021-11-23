import CursosModel from "../../data/Cursos.js";

export async function CreateCourse(req, res) {

  const CursoExistente = await CursosModel.findOne({
    where: {
      Curso: req.body.curso
    }
  });


  if (!CursoExistente) {

    const curso = {
      Curso: req.body.curso,
      Professores: req.body.professores,
      DiasDeAula: req.body.diasdeaula,
      Horários: req.body.horarios,
      AlunosMatriculados: req.body.alunosmatriculados,
    };

    return CursosModel.create(curso)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message
        });
      });
  } else {
    if (CursoExistente.curso === req.body.curso && CursoExistente.Horários === req.body.horarios) {
      res.status(400).send({
        message: "Curso já cadastrado"
      })
    } else {
      const curso = {
        Curso: req.body.curso,
        Professores: req.body.professores,
        DiasDeAula: req.body.diasdeaula,
        Horários: req.body.horarios,
        AlunosMatriculados: req.body.alunosmatriculados,
      };

      return CursosModel.create(curso)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: err.message
          });
        });
    }
  }

}

export const findAllCourses = (req, res) => {
  
  CursosModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

export const del = (req, res) => {
  const id = req.params.id;

  CursosModel.destroy({
      where: {
        id: id
      }
    })
    .then(num => {
      res.send("Curso deletado");
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possivel deletar curso com id = " + id
      });
    });
};

export const delAll = (req, res) => {
  UserModel.destroy({
      where: {},
      truncate: false
    })
    .then(nums => {
      res.send({
        message: `${nums} Cursos deletados com sucesso`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

export const update = (req, res) => {
  const id = req.params.id;

  const CursoObj = {
        Curso: req.body.curso,
        Professores: req.body.professores,
        DiasDeAula: req.body.diasdeaula,
        Horários: req.body.horarios,
        AlunosMatriculados: req.body.alunosmatriculados,
  };
  
  CursosModel.update(CursoObj, {
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Curso atualizado com sucesso"
        });
      } else {
        res.send({
          message: `Não foi possível atualizar o curso desejado`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erro ao atualizar curso com id =" + id
      });
    });
};

export const findOne = (req, res) => {
  const id = req.params.id;

  CursosModel.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Curso  com id = ${id} não encontrado.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err
      });
    });
};