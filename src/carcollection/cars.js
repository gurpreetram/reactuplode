import React from "react";
import "./cars.css"
import picture1 from "../image/redcar.jpeg";
import picture2 from "../image/cartwo.jpeg"


const Cars = () => {
    return (
        <>
            <div className="cars-div">
                <div className="image-div">
                    <img src={picture1} alt="picture" className="w-100" />
                    <p className="absoult-para">2024 Ford Mustang <sup>®</sup></p>
                    <div className="absoult-div">
                        <button type="button">Build & Price</button>
                    </div>
                </div>
            </div>
            <div className="amount-div">
            </div>
            <div class="container">
                <div class="row">

                    <div class="col-4"> <div className="amounts">
                        <p className="amount fs-1 text-primary">$30,920</p>
                        <p>Starting at <sup>1</sup></p>
                        <p>EcoBoost<sup>®</sup> Fastback for (Enter a Location).</p>
                    </div>
                    </div>
                    <div class="col-6">
                        <div className="seat-div">
                            <p className="fs-1">4</p>
                            <p>Seating for</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cars-div">
                <div className="image-div">
                    <img src={picture2} alt="picture" className="w-100" />
                    <p className="absoult-para2">Adrenaline Chasers: This Is Your Wake-Up Call</p>
                    <p className="absoult-para fs-5 paragraph"> 2024 Ford Mustang <sup>®</sup> lineup has the power, tech and style to keep ahead of the pack — just like you.</p>
                    <div className="absoult-div2">
                        <button className="text-black">Explore All Features</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cars;