const Interview = require('../models/Interview');

exports.getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();

    res.status(200).json(interviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.addInterview = async (req, res) => {
  try {
    const { companyName, date } = req.body;
    const newInterview = new Interview({
      companyName,
      date
    });
    await newInterview.save();
    res.status(201).json({ message: 'Interview added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
