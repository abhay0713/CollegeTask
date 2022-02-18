import React from "react"
import './card-list.css'
import { Card } from "../card/card.component"

 export const CardList = (props) =>(
    <div className="card-list"> 
    {props.colleges.map(college=>(
    <Card college = {college}/>
    ))}
    </div>
 )

export default CardList