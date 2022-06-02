import {useNavigate} from "react-router";
import projectsstyle from '../styling/projectsstyle.css'

export function Projects () {

    let navigate = useNavigate();
    const resume = () => {
        navigate("/resume");
    }

    return (
        <div className='projects'>
            <h1 className='header'>My Projects</h1>
            <div className='pet-my-dog'>
                <h1>Pet My Dog</h1>
            </div>
        </div>
    )
}