import React from 'react'

const SectionTitle = ({title,subTitle,showLine}) => {
  return (
    <div className='text-center'>
        <h3 className='section-title'>{title}</h3>
        <span className='section-subTitle'>{subTitle}</span>    
        {showLine ? <span className='dividerLine'></span> : null}
    </div>
  )
}

export default SectionTitle