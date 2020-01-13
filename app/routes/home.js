

module.exports = application => {
  application.get("/", (req, res) => {
    application.app.controllers.home_file.home(application, res);
  });
};
