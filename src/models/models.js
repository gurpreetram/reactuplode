import react from "react";
import "./models.css"
import picture from "../image/modelsimage.jpeg"

const Models = () => {
    return (
        
           <div className="models">
                  <p className="fs-3 text-center"> Mustang <sup>®</sup> Models  </p>
                <div className="model-div">
                    <img src={picture} alt="picture" className="w-100" />
                    <div className="absoult-models">
                        <p className="fs-1">Take Command</p>
                        <p className="fs-5"> It’s the most digital, driver-centric cockpit ever found in the Mustang <sup>®</sup>  lineup. Put yourself in complete control. </p>
                            <button className="text-black modelsbtn">Discover Technology</button>
                    </div>
                </div>
           </div>
            
);
}


            export default Models;