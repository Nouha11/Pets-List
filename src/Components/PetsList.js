import React from 'react'
import PetCard from './PetCard';

const PetsList = ({petsList,fitteredPets,setFitteredPets,inputText}) => { 
    
    const clickedButton = () => {

                if((fitteredPets.length == 0) || (inputText.length == 0)) {
                    return petsList.map( (el,key) => (
                    <PetCard 
                       el={el}
                       key={el.Id}
                       />
                ))}

            if( inputText.length > 0){
                
               return  fitteredPets.map( (el,key) =>
                (<PetCard 
                   el={el}
                   key={el.Id}
                   />
               ))

            };

            setFitteredPets([]);
};             

    return(
       <div className="pets">
           <div className="Lists"> 

            {clickedButton() }
            </div>
        </div>
    ); 
}

export default PetsList;