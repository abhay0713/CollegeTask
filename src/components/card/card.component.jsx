import React  from "react";
import './card.component.css'
import image from './college_02.jpg'

export const Card = (props)=>(
    <div className="card-container">
        <div className="image">
            <img src={image} alt="" /> 
        </div>
        <div className="content">
            <h4>{props.college.college_name}</h4> 
            <p>{props.college.nearest_place}</p>
            <p class="per">93% Match:{props.college.famous_nearest_places}</p>
            <p >{props.college.offertext}</p>
            <p> Falt 200% Off </p>


        </div>
        
    </div>
)