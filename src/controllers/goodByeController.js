async function welcomeController (req, res) {
    if (req.body.data == null || req.body.data == undefined) {
      return res.status(400).send("Missing body!");
    } else {
      return res.status(200).send(`Goodbye!`);
    }
  };
  
  module.exports = welcomeController;
  