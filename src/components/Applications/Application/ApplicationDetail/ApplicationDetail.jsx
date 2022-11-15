import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client, urlFor } from '../../../../client';
import { getPostById } from '../../../../utils/data';
import Loader from '../../../Loader/Loader';
import Conditions from '../Conditions';

const ApplicationDetail = () => {
  const { id } = useParams();
  const [postDetail, setPostDetail] = useState(null);
  
  useEffect(() => {
    let query = getPostById(id);

    client.fetch(query)
      .then((data) => setPostDetail(data[0]))
      .catch((error) => console.log(error))
  }, [id])


  if(!postDetail) return <Loader/>
  return (
    <div className='applicationDetail-container'>
        <div className='topDetails-block'>
          {/* <img src={urlFor(postDetail?.businessLogo?.asset?._ref)} alt="business-logo" /> */}
          <div className='title-block'>
            <h1>{postDetail?.business}</h1>
            <span className={postDetail?.status === "sent" ? "status-send" : "status-finished"}>{postDetail?.status}</span>
          </div>
          <h4 className='detail-title'>{postDetail?.title}</h4>
          <span className='color-hierarchy2'>{postDetail?.city} - {postDetail?.modality}</span>
        </div>
        <div className='flex-column-gap'>
          <div className='flex-column-gap'>
            <h4 className='detail-title'>Description:</h4>
            <p className='color-hierarchy2'>{postDetail?.description}</p>
          </div>
          <div className='flex-column-gap'>
            <h4 className='detail-title'>Conditions:</h4>
            <div className='detail-conditions-block'>
              {postDetail?.conditions?.map((condition, i) => (
                <Conditions key={i} condition={condition}/>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default ApplicationDetail