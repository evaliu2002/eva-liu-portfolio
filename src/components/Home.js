import React from 'react';
import {useNavigate} from "react-router";
import homestyle from '../styling/homestyle.css'

export function Home () {

    let navigate = useNavigate();
    const projects = () => {
        navigate("/projects");
    }

    return (
        <div className='home'>
            <h1 className='name'>
                Hi <br /> I'm Eva Liu
            </h1>
            <h2 className='edu-status'>
                I am currently a Sophomore Computer Science Undergrad Student at the University of Washington
                Seattle. <br />
                I specialize in Java and dabble in Front-end developing.
            </h2>
            <button onClick={projects} className="main-button">More Info</button>
        </div>
    )
}