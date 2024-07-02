const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const courses = [
    { icon: '📚', name: 'Basic Algorithm', lessons: 25, startDate: '27 Jan, 2023', completed: '10/25', percent: '48%', duration: '14h 38m 56s' },
    { icon: '💻', name: 'Web Development', lessons: 45, startDate: '23 Feb, 2023', completed: '40/45', percent: '97%', duration: '36h 30m 00s' },
    { icon: '📊', name: 'Basic Data Science', lessons: 37, startDate: '14 Jan, 2023', completed: '9/37', percent: '40%', duration: '37h 00m 00s' },
    { icon: '🎨', name: 'UI/UX Design', lessons: 32, startDate: '19 Feb, 2023', completed: '26/32', percent: '84%', duration: '16h 40m 50s' },
    { icon: '📅', name: 'Project Management', lessons: 19, startDate: '27 Jan, 2023', completed: '14/19', percent: '89%', duration: '13h 20m 00s' }
];

app.use('/icons', express.static('public/icons'));

app.get('/courses', (req, res) => {
    res.json(courses);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
