async function goodAfternoonController(req, res) {
  try {
    if (!req.body) {
      return res.status(400).send("Missing request body!");
    }

    if (!req.body.data || req.body.data === undefined) {
      return res.status(400).send("Missing 'data' property in the request body!");
    }

    const requestData = req.body.data;

    if (typeof requestData !== 'string') {
      return res.status(400).send("'data' must be a string!");
    }

    if (requestData.trim() === '') {
      return res.status(400).send("'data' cannot be empty!");
    }

    if (!/^[a-zA-Z]+$/.test(requestData)) {
      return res.status(400).send("'data' must contain only letters!");
    }

    if (requestData.length < 3) {
      return res.status(400).send("'data' must have at least 3 characters!");
    }

    return res.status(200).send(`Good Afternoon!`);
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
}

module.exports = goodAfternoonController;
