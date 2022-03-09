const res = require("express/lib/response");
const WilderModel = require("../models/Wilder");

const create = async (req, res) => {
  try {
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();
    res.json({ success: true, result: result });
  } catch (err) {
    res.json({ success: false, result: err });
  }
};

const findAll = async (req, res) => {
  try {
    const result = await WilderModel.find();
    res.send({ success: true, result: result });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving wilders.",
    });
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await WilderModel.findById(id);
    if (!result)
      res.status(404).send({ message: "No found Wilder with id " + id });
    else res.send(result);
  } catch (err) {
    res.status(500).send({ message: "Error retrieving Wilder with id=" + id });
  }
};

const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await WilderModel.findByIdAndRemove(id);
   // const result = await WilderModel.deleteOne({ _id: id});
    if (!result) {
      res.status(404).send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Wilder was not found!`,
      });
    } else {
      res.send({
        message: "Wilder was deleted successfully!",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Wilder with id=" + id,
    });
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  console.log(id)
  const result = await WilderModel.updateOne(
    { _id: id, ...req.body }
  );
  console.log(result)
  try {
    if (!result) {
      res.status(404).send({
        message: `Cannot update wilder with id=${id}. Maybe wilder was not found!`,
      });
    } else res.send({ message: "Wilder was updated successfully." });
  } catch (err) {
    res.status(500).send({
      message: "Error updating Wilder with id=" + id,
    });
  }
};

module.exports = { create, findAll, findOne, deleteById, update };
