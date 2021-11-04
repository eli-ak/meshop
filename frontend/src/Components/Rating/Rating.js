import React from 'react';
import { FaStar,FaStarHalfAlt,FaRegStar} from "react-icons/fa"

const Rating = ({value,numReviews}) => {
  return (
      <>
      {value >=1 ?(<FaStar color="#f5bc04" size={20}/>):value >= 0.5 ? (<FaStarHalfAlt/>)  
      : (<FaRegStar/>)}
       {value >=2 ?(<FaStar color="#f5bc04" size={20}/>):value >= 1.5 ? (<FaStarHalfAlt/>)  
      : (<FaRegStar/>)}
       {value >=3 ?(<FaStar color="#f5bc04" size={20}/>):value >= 2.5 ? (<FaStarHalfAlt/>)  
      : (<FaRegStar/>)}
       {value >=4 ?(<FaStar color="#f5bc04" size={20}/>):value >= 3.5 ? (<FaStarHalfAlt/>)  
      : (<FaRegStar/>)}
       {value >=5 ?(<FaStar color="#f5bc04" size={20}/>):value >= 4.5 ? (<FaStarHalfAlt/>)  
      : (<FaRegStar/>)}
      
      <span>{numReviews} Reviwes</span>
  </>
);
       };

export default Rating;
