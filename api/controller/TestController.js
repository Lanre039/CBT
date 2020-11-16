module.exports = {
  test: async (req, res, next) => {
    try {
      const data = "Testing!!!";
      res.status(200).send({ data, user: req.user });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
};
