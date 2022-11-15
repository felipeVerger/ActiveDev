import React from 'react'
import moment from 'moment';
import { Link } from 'react-router-dom';

import { urlFor } from '../../../client';
import Conditions from './Conditions';

const Application = ({ application }) => {

  return (
    <tbody className="application">
      <tr>
        <td>
          <Link to={`/applications/${application._id}`} className="link-centered">
            <img
              src={urlFor(application?.businessLogo?.asset?._ref)}
              className="company-logo"
              alt="company-logo"
            />
            <strong className="color-hierarchy1">{application.title}</strong>
          </Link>
        </td>
        <td>
          <span className="color-hierarchy2">{application.modality}</span>
        </td>
        <td>
          <span className="color-hierarchy1">{application.business}</span>
        </td>
        <td>
          <span className="color-hierarchy1">{application.city}</span>
        </td>
        <td style={{ marginTop: "7px" }}>
          <div>
            {application.conditions?.map((condition, i) => (
              <Conditions key={i} condition={condition}/>
            ))}
          </div>
        </td>
        <td>
          <span className="color-hierarchy1">{`$${application.salary}`}</span>
        </td>
        <td>
          <span
            className={
              application.status === "sent" ? "status-send" : "status-finished"
            }
          >
            {application.status}
          </span>
        </td>
        <td>
          <span className="color-hierarchy1">
            {moment(application.dateSend, "YYYYMMDD").fromNow()}
          </span>
        </td>
      </tr>
    </tbody>
  );
}

export default Application