import React from "react";

const Work = () => {

    return (
        <div>
            <h1>Hey home</h1>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a id="work" className="nav-link active" href="/work" target="_blank">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about" target="_blank">About me</a>
                </li>

            </ul>
        </div>
    )
}

export default Work;