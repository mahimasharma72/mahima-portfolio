import React from "react";
import {About} from "./app/components/about";

/**
 * Render all the components of the website
 * @returns {JSX.Element}
 * @constructor
 */
const RenderComponents = () => {
    return (
        <div className="s_c">
            <About/>
        </div>
    )
}

export default RenderComponents;
