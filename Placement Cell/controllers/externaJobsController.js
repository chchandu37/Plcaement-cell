import axios from "axios";

exports.getExternalJobs = async (req, res) => {
  try {
    const response = await axios.get('https://jobs.github.com/positions.json');
    const externalJobs = response.data.map(job => ({
      title: job.title,
      company: job.company,
      location: job.location,
      url: job.url
    }));
    res.status(200).json(externalJobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
