const createCsvWriter = require('csv-writer').createObjectCsvWriter;

exports.downloadCSV = async (req, res) => {
  try {
    const data = [
      { id: 1, name: 'John Doe', course: 'Computer Science' },
      { id: 2, name: 'Jane Doe', course: 'Electrical Engineering' },
    ];
    const csvHeaders = [
      { id: 'id', title: 'Student ID' },
      { id: 'name', title: 'Name' },
      { id: 'course', title: 'Course' },
    ];
    const csvWriter = createCsvWriter({
      path: 'output.csv', 
      header: csvHeaders,
    });
    await csvWriter.writeRecords(data);
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=output.csv');
    const stream = fs.createReadStream('output.csv');
    stream.pipe(res);
    fs.unlinkSync('output.csv');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
