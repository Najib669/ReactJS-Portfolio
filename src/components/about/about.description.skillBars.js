import React, {useState} from "react";

export default function SkillBars() {

    //state for specific techs you know
    const [technologies, setTechnologies] = useState([
        {
            name: "HTML5",
            percentage: 80
        },
        {
            name: "CSS3",
            percentage: 80
        },
        {
            name: "Javascript",
            percentage: 90
        },
        {
            name: "ReactJS",
            percentage: 80
        },
        {
            name: "NodeJS",
            percentage: 90
        },
        {
            name: "SASS",
            percentage: 60
        },
        {
            name: "Material ui",
            percentage: 60
        },
        {
            name: "MongoDB",
            percentage: 80
        },
        {
            name: "React Bootstrap",
            percentage: 70
        },
    ]);

    return(
        <div className={"col-12 col-sm-12 col-md-12 col-lg-6 wow fadeIn"}>
            {
                technologies.map((tech, index) => {
                    return (
                        <div className="progress mb-3" key={index}>
                            <div
                                className={"progress-bar fill-"+ tech.percentage.toString() +"-bar"}
                                role="progressbar"
                                style={{ width: tech.percentage + "%" }}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {tech.name}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}