import React from 'react'
import { FormParams, FormType } from './type'

function Form2({onClick, setAge}: FormParams) {
    return (
        <>
            <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                Help us understand you better
            </h2>
            <form action="" className='d-flex flex-column align-items-center'>
                <div style={{ borderBottom: '2px solid white' }} className='my-1 w-75' >
                    <input type="number" placeholder='Age' onChange={(e) => setAge?.(e.target.value)} />
                </div>
                <div className='d-flex my-1 w-75' style={{ borderBottom: '2px solid white' }}>
                    <input type="text" placeholder="City" />
                </div>
                <div className='d-flex my-1 w-75' style={{ borderBottom: '2px solid white' }}>
                    <input type="text" placeholder="Company" />
                </div>
                <input type="button" value="Continue" className='cta-btn px-3 py-2 m-2' onClick={() => onClick(FormType.complaint)} />
            </form>
        </>
    )
}

export default Form2