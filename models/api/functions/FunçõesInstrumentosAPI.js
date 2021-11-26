import instrumentModel from "../../data/Instrumentos.js";

export async function CreateInstrument(req, res) {

    const instrumentcodeexists = await instrumentModel.findOne({
        where: {
            Código: req.body.codigo
        }
    });

    if (instrumentcodeexists) {
        res.status(400).send({
            message: "instrument already exist"
        })
    } else if (req.body.codigo === null) {
        res.status(400).send({
            message: "Content can not be empty!"

        })
    } else {

        const Instrument = {
            Nome: req.body.nome,
            Código: req.body.codigo,
            Tipo: req.body.tipo,
            TamanhoCms: req.body.tamanhocms,
            PesoKgs: req.body.pesokgs
        };

        return instrumentModel.create(Instrument)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the UserModel."
                });
            });
    }

}

export const findAllInstrument =  (req, res) => {
  instrumentModel.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving UserModels."
      });
    });
};

export const del = (req, res) => {
  const id = req.params.id;

  instrumentModel.destroy({
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "1 was deleted successfully!"
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

export const update = (req, res) => {
  const id = req.params.id;
  const obj = {
        id:id,
        Nome: req.body.nome,
        Código: req.body.codigo,
        Tipo: req.body.tipo,
        TamanhoCms: req.body.tamanhocms,
    PesoKgs: req.body.pesokgs    
    };

  instrumentModel.update(obj, {
      where: {
        id: id
      }
    })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "1 was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update with id=${id}. Maybe UserModel was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating UserModel with id=" + id
      });
    });
};

export const findOne =  (req, res) => {
  const id = req.params.id;

  instrumentModel.findByPk(id)
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