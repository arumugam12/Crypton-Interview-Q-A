import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseTable.scss';

interface Course {
    icon: string;
    name: string;
    lessons: number;
    startDate: string;
    completed: string;
    percent: string;
    duration: string;
}

const CourseTable: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/courses')
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the courses!', error);
            });
    }, []);

    return (
        <div className="course-table">
            <div className='header-one'>
            <h1>My Courses</h1>
            <a href="/view-all" className='view-all'>View All</a>
            </div>
            <div className="course-header">
                <span>Course Name</span>
                <span>Start Date</span>
                <span>Lesson Completed</span>
                <span>Duration</span>
            </div>
            {courses.map((course, index) => (
                <div key={index} className="course-row">
                    <div className="course-info">
                        <span className="icon">{course.icon}</span>
                        <div>
                            <p className="name">{course.name}</p>
                            <p className="lessons">{course.lessons} Lessons</p>
                        </div>
                    </div>
                    <span className="startdate">{course.startDate}</span>
                    <span className="completed">{course.completed} ({course.percent})</span>
                    <span className="duration">{course.duration}</span>
                </div>
            ))}
        </div>
    );
};

export default CourseTable;
