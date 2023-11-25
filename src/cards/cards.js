import React from "react";
import "./cards.css"
import Card1 from "../image/card1.avif"
import Card2 from "../image/card2.avif"
import Card3 from "../image/card3.avif"
import Card4 from "../image/card4.avif"

const Cards = () => {
    return (
        <div className="cards-div d-flex>">
            <div className="row">
              <div className="col-6">
                <div className="card-body ">
              <img src={Card1} className="card-img-top rounded" alt="..." />
              <div className="cards-para">
               <h2>Immersive Dual Display</h2>
               <p className="mb-5">Sit behind a configurable dual display and a 13.2" center screen.<sup >27</sup>
                It transforms daily drives into a truly visceral experience.</p> <br />
                    <a href="#" className="btn btn-primary">See Display Features</a>
                  </div>
                
                </div>
              </div>
              <div className="col-6">
                <div className="card-body">
              <img src={Card2} className="card-img-top rounded" alt="..." />
                  <div className="cards-para">
                  <h2>See Your Stats on Every Lap</h2>
                  <p className="smallsize1">Track Apps<sup>®</sup>* 
                  display your performance metrics in the instrument cluster. Get instant feedback to help boost your driving skills.</p>
                  <p className="mb-3 smallsize">*For track use only. Not to be used under any other driving conditions. May void your vehicle’s limited warranty. See your warranty booklet for details.</p>
                   <br />
                    <a href="#" className="btn btn-primary">Explore Track Apps</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
            <h1>Experience a Power Shift</h1>
            <p className="mb-3">The 7th-gen Mustang<sup>®</sup>
             lineup redefines performance. It’s a revolutionary combination of raw power, athletic <br /> handling and dynamic design.</p> <br />
             <a href="#" className="btn btn-primary">Discover Performence</a>
            </div>
  </div>
    )
}

export default Cards;