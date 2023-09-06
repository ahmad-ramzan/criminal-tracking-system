import React from 'react'

const Overview = () => {
  return (
    <>
    <div className='p-6 '>
      <h1 className='is-size-3 has-text-weight-bold'>overview</h1>
      <ol className='is-size-4 is-size-5-touch'>
        <li>Read record in the database through ViewRecord</li>
        <li>First add record in the database (image rename with its original name)</li>
        <li>Then Search and preprocess specific records that you want to identify</li>
        <li>Then select source in which you want to identify</li>
      </ol>
    </div>
    </>
  )
}

export default Overview
