import React from 'react'
import { FaUser } from 'react-icons/fa'
import { FormParams, FormType } from './type'



function Form1({onClick}: FormParams) {
    return (
        <>
            <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                Book an Appointment for
                <br />
                <span style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}> Rs 1000 </span>
                <strong>
                    FREE
                </strong>
            </h2>
            <p style={{ color: '#1886A4', }} className='text-center' >60+ Expert Physiotherapists for 200+ Conditions</p>
            <form action="" className='d-flex flex-column align-items-center'>
                <div style={{ borderBottom: '2px solid white' }} className='my-1 w-75' >
                    <FaUser /> &nbsp;
                    <input type="text" placeholder='Your name' />
                </div>
                <div className='d-flex my-1 w-75' style={{ borderBottom: '2px solid white' }}>
                    <div >+91</div> &nbsp;
                    <input type="number" maxLength={10} name="" id="" placeholder="ex.:- 1234567890" />
                </div>
                <input type="button" value="Start Your Recovery" className='cta-btn px-3 py-2 m-2' onClick={() => onClick(FormType.age)} />
            </form>
        </>
    )
}

export default Form1