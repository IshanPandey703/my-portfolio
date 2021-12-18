import "./Skills.css";
import html5 from "../../Media/html.svg";
import css from "../../Media/css.svg";
import javascript from "../../Media/js.svg";
import bootstrap from "../../Media/bootstrap.svg";
import mui from "../../Media/mui.svg";
import nodejs from "../../Media/nodejs.svg";
import react from "../../Media/react.svg";
import express from "../../Media/express.svg";
import firebase from "../../Media/firebase.svg";
import mongoDb from "../../Media/mongodb.svg";
import cpp from "../../Media/cpp.svg";
import python from "../../Media/python.svg";

export default function Skills() {
    return (
        <div className="Skills">
            <div className="Skills-container">
                <h1 className="heading">Skills</h1>
                <div className="icon-container">
                    <img src={html5} alt="hmtl5" />
                    <img src={css} alt="css3" />
                    <img src={javascript} alt="javascript" />
                    <img src={bootstrap} alt="bootstrap" />
                    <img src={mui} alt="mui" />
                    <img src={react} alt="react" />
                    <img src={nodejs} alt="nodejs" />
                    <img src={express} alt="express" />
                    <img src={mongoDb} alt="mongodb" />
                    <img src={firebase} alt="firebase" />
                    <img src={cpp} alt="cpp" />
                    <img src={python} alt="python" />
                </div>
            </div>
        </div>
    );
}