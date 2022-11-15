import React from 'react'
import { useLocation } from 'react-router-dom';
import { icons } from '../../../constants';


const Conditions = ({ condition }) => {
    const location = useLocation().pathname;

    const conditionIcons = () => { 
    switch(condition) {
        case 'informal-dress-code':
            return icons.dressCodeIcon
        case 'fully-remote':
            return icons.remoteIcon
        case 'partially-remote':
            return icons.homeWifiIcon
        case 'flexible-hours':
            return icons.clockIcon
        case 'health-coverage':
            return icons.healthIcon
        case 'computer-provided': 
            return icons.computerIcon
        case 'vacation':
            return icons.vacationIcon
        case 'pet-friendly':
            return icons.petsIcon
        case 'accessible':
            return icons.accessibleIcon
        case 'beverages-&-snacks':
            return icons.foodIcon
        default:
            return null;
      }
    }

  return (
    <span className={location === '/applications' ? "color-hierarchy2" : 'detail-condition-icon'}>
      {conditionIcons()}
    </span>
  );
}

export default Conditions