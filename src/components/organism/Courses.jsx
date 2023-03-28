import ActCard from "../molecules/ActCard";
import { useState, useEffect } from "react";
import {data} from "../../data/data"
import "../../assets/styles/global.css";

function Courses() {
    const [courses, setCourses] = useState([]);
    //useEffect se ejecuta despues del primer renderizado
    useEffect(() => {
        fetch("https://moodhappy.iothings.com.mx:3000/Courses/")
            .then(res => res.json())
            .then(data => {
                setCourses(data);
            })
    }, [])

    return (
        <div className="columns-3">
            {courses.map(course => <ActCard 
                key={course.id} course={course.name} number={course.number} description={course.description} tasks={course.tasks} />)}
        </div>
    );
}

export default Courses;