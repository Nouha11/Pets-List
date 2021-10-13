import React from 'react'
import PetCard from './PetCard';

const PetsList = ({petsList,fitteredPets,clicked}) => { 
    
    const clickedButton = () => {
        console.log('clicked')

        if(clicked === false)
        {    console.log(clicked)
            return petsList.map( function (el,key){
                <PetCard 
                   el={el}
                   key={el.Id}
                   />
               })
          }
            else{
                console.log(clicked)
            
                return fitteredPets.map( function (el,key){
                <PetCard 
                   el={el}
                   key={el.Id}
                   />
               })}
};                
    
    return(
       <div className="pets">
           <div className="Lists"> 
            {clickedButton()}
            </div>
        </div>
    ); 
}

export default PetsList;