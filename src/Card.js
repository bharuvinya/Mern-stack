import React , {useState} from 'react'
import './Card.css'
import gray from './gray.png'
import { CiHeart } from "react-icons/ci";
import { SlActionRedo } from "react-icons/sl";
import { BsArrowLeftCircleFill ,BsArrowRightCircleFill} from "react-icons/bs";
const Card=({data})=>{
const [move, setMove]=useState(0)

const nextMove = (inc) => {
  
    setMove(move === data.length - 1 ? 0 : move + 1);
  };

const prevMove = (inc) => {

    setMove(move === 0 ? data.length - 1 : move - 1);
};

    return(
        <>
        {data.map((i,id)=>{
        return(
 <div className='container'>
<div className='slide'>
<div className='forward'><SlActionRedo className='share'></SlActionRedo></div>
   <div className='wish'><CiHeart className='fav'></CiHeart></div>      
   <BsArrowLeftCircleFill onClick={prevMove} className='arrow left'/>   
   
{i.land_media.length===0?<img src={gray} alt="" className={move === id ? "move" : "move-hidden"}></img>:i.land_media.map((a,index)=>{
return( 
<img src={a.image} alt="" className={move === index ? "move" : "move-hidden"}></img>
        )})}
<BsArrowRightCircleFill onClick={nextMove} className='arrow right'/>
   
    </div>
    <div className='content'>
    <div className='new-p'>
       
    <span>{i.village_name},</span>
    <span>{i.mandal_name},</span>
    <h3>{i.district_name}(dt)</h3>
     <span><b>{i.total_land_size_in_acres.acres?i.total_land_size_in_acres.acres+" Acres  ":null}</b></span> 
     <span><b>{i.total_land_size_in_acres.guntas?i.total_land_size_in_acres.guntas+" Guntas":null}</b></span>
     <b>.  </b><span>&#8377;{i.total_land_size_in_acres.acres && i.price_per_acre_crore.crore!==0.0?i.price_per_acre_crore.crore+(i.price_per_acre_crore.lakh*0.01)+" crores per acre":i.total_land_size_in_acres.acres && i.total_land_size_in_acres.guntas && i.price_per_acre_crore.crore===0.0?i.price_per_acre_crore.lakh+" lakh per acre":i.total_land_size_in_acres.acres===0.0 && i.total_price<100?Math.round(i.total_price*100)/100 +" lakh per acre":i.total_price>100?Math.round((i.total_price*0.01)*100)/100 +" crore per acre":null}</span>



    </div>
    </div>
    </div>
        )
        })}
        </>
    )

}
export default Card
