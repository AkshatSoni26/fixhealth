import React, { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FormParams, FormType } from './type'
import { Form } from 'react-router-dom';



function Form1({onClick}: FormParams) {
    
    const [number, setNumber] = useState('')

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const nameInput = document.querySelector<HTMLInputElement>('input[type="text"]');
        const numberInput = document.querySelector<HTMLInputElement>('input[type="number"]');

        if (nameInput?.validity.valid && numberInput?.validity.valid) {
            if(number.length == 10){
                onClick(FormType.age);
            }
            else{
            alert('Phone number is wrong.');
            }
        } else {
            alert('Please fill in all required fields.');
        }
    };

    
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
            <Form  action="" className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <div style={{ borderBottom: '2px solid white' }} className='my-1 w-75' >
                    <FaUser /> &nbsp;
                    <input type="text" placeholder='Your name' required />
                </div>
                <div className='d-flex my-1 w-75' style={{ borderBottom: '2px solid white' }}>
                    <div >+91</div> &nbsp;
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} name="" id="" placeholder="ex.:- 1234567890" required />
                </div>
                <input type="submit" value="Start Your Recovery" className='cta-btn px-3 py-2 m-2' />
            </Form>
        </>
    )
}

export default Form1