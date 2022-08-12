import React from 'react'
import ReactLoading from 'react-loading';
import './loading.css'


const Loading = ({loading}) => {



  return (
    
      <div className='loading'>{loading &&<ReactLoading type={"spinningBubbles"}color={"#f0f8ff"} height={'5%'} width={'5%'} />}</div>
  
  )
}

export default Loading