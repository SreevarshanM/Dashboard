const { queries } = require("../Models/model");

exports.createQuery = async (req, res) => {
  try {
    const query = await queries.create(req.body);
    if (!query) throw new Error("Query not inserted");
    res.status(200).json({
      message: "Sucessfully Created",
      status: true,
    });
  } catch (error) {
    res.status(444).json({
      message: `${error}`,
      status: false,
    });
  }
};
exports.getQueries = async (req, res) => {
  try {
    let query = req.query;
    if (!query) {
      query = "";
    }
    const data = await queries.find(query);
    if (!data) throw new Error("Something Went Wrong");
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: `${error}`,
      status: false,
    });
  }
};
exports.getQueryDetails = async (req, res) => {
  try {
    let query = req.query;
    if (!query) {
      query = "";
    }
    const totalQuery = await queries.find().count();
    const resQuery = await queries
      .find({
        status: 1,
      })
      .count();
    const unResQuery = await queries
      .find({
        status: 2,
      })
      .count();

    res.status(200).json({
      totalQuery,
      resQuery,
      unResQuery,
    });
  } catch (error) {
    res.status(404).json({
      message: `${error}`,
      status: false,
    });
  }
};

exports.updateQuery = async (req, res) => {
  try {
    const query = await queries.findByIdAndUpdate(req.body._id, req.body, {
      runValidators: true,
      new: true,
    });
    console.log(query);
    if (!query) throw new Error("Not Updated");
    res.status(200).json({
      message: "sucessfully Updated",
      status: true,
    });
  } catch (error) {
    res.status(409).json({
      message: `${error}`,
      status: false,
    });
  }
};

exports.deleteQuery = async (req, res) => {
  try {
    const query = await queries.findByIdAndDelete(req.body._id);
    if (!query) throw new Error("Not Deleted");
    res.status(204).json({
      message: "sucessfully Deleted",
      status: true,
    });
  } catch (error) {
    res.status(404).json({
      message: `${error}`,
      status: false,
    });
  }
};
