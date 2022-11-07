import React from 'react'
import {AiOutlineGlobal} from 'react-icons/ai';
import {GiConverseShoe} from 'react-icons/gi';
import moment from 'moment';

import { urlFor } from '../../../client';

const Application = ({ application }) => {
  return (
    <tbody className='application'>
            <tr>
              <td>
                <a href="#" className='link-centered'>
                 <img src={urlFor(application?.businessLogo?.asset?._ref)} className='company-logo' alt='company-logo'/>
                 <strong className='color-hierarchy1'>{application.title}</strong>
                </a>
              </td>
              <td>
                <span className='color-hierarchy2'>{application.modality}</span>
              </td>
              <td>
                <span className='color-hierarchy1'>{application.business}</span>
              </td>
              <td><span className='color-hierarchy1'>{application.city}</span></td>
              <td style={{marginTop: '7px'}}>
                <div>
                  <AiOutlineGlobal className='color-hierarchy2'/>
                  <GiConverseShoe className='color-hierarchy2'/>
                </div>
              </td>
              <td>
                <span className='color-hierarchy1'>{`$${application.salary}`}</span>
              </td>
              <td>
                <span className={application.status === 'sent' ? 'status-send' : 'status-finished'}>{application.status}</span>
              </td>
              <td>
                <span className='color-hierarchy1'>{moment(application.dateSend, "YYYYMMDD").fromNow()}</span>
              </td>
            </tr>
          </tbody>
  )
}

export default Application