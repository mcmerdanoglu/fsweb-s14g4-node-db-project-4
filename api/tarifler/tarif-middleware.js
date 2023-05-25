const tarifModel = require("./tarif-model");

async function checkTarifId(req, res, next) {
  try {
    const isExistingTarif = await tarifModel.idyeGoreTarifGetir(
      req.params.tarif_id
    );
    if (isExistingTarif.length == 0) {
      res.status(404).json({ message: "Tarif yok" });
    } else {
      req.currentTarif = isExistingTarif;
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { checkTarifId };
