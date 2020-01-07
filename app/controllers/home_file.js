module.exports.home = (application, res) => {
  application.app.models.home_file.home(res);
};
