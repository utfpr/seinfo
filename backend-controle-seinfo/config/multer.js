const multer = require("multer");

module.exports = {
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend-controle-seinfo/src/assets/imgs')
    },
    filename: function (req, file, cb) {
      nomedoarquivo = file.originalname;
      cb(null, file.originalname);
    }
  })
}