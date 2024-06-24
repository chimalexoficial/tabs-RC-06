import React from 'react'

const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
    return (
        <div className='btn-container'>
        {jobs.map((jobsMap, index) => {
            return <button 
            key={jobsMap.id}
            className={index === currentItem ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => setCurrentItem(index)}>
                {jobsMap.company}
            </button>
        })}
        </div>
    )
}

export default BtnContainer