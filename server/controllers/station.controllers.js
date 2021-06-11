const { Op } = require("sequelize");
const tables = require("../config/associations");

const getStations = async (req, res) => {
  const value = req.query.value;
  try {
    const stations = await tables.Station.findAll({
      where: {
        city: {
          [Op.like]: `${value}%`,
        },
      },
    });

    res.status(200).json({
      success: true,
      count: stations.length,
      data: stations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

module.exports = getStations;
