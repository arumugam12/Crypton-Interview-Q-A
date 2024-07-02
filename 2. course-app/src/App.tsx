import React from 'react';
import CourseTable from './components/CourseTable';
import './App.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <CourseTable />
        </div>
    );
};

export default App;
