const Result = require('../models/Result');

exports.getResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.addResult = async (req, res) => {
  try {
    const { companyName, result } = req.body;
    const newResult = new Result({
      companyName,
      result
    });
    await newResult.save();
    res.status(201).json({ message: 'Result added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
