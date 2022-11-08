import React from 'react'
import {AiOutlineGlobal} from 'react-icons/ai';
import {BiTimeFive, BiAccessibility} from 'react-icons/bi';
import {BsUmbrella} from 'react-icons/bs';
import {GiConverseShoe} from 'react-icons/gi';
import {RiHomeWifiFill, RiComputerLine} from 'react-icons/ri';
import {MdOutlineHealthAndSafety, MdPets, MdOutlineFastfood} from 'react-icons/md';



const Conditions = ({ condition }) => {
    const conditionIcons = () => { 
    switch(condition) {
        case 'informal-dress-code':
            return <GiConverseShoe/>
        case 'fully-remote':
            return <AiOutlineGlobal />
        case 'partially-remote':
            return <RiHomeWifiFill/>
        case 'flexible-hours':
            return <BiTimeFive/>
        case 'health-coverage':
            return <MdOutlineHealthAndSafety/>
        case 'computer-provided': 
            return <RiComputerLine/>
        case 'vacation':
            return <BsUmbrella/>
        case 'pet-friendly':
            return <MdPets/>
        case 'accessible':
            return <BiAccessibility/>
        case 'beverages-&-snacks':
            return <MdOutlineFastfood/>
        default:
            return null;
      }
    }

  return (
    <span className="color-hierarchy2">
      {conditionIcons()}
    </span>
  );
}

export default Conditions