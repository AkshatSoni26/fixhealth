import React from 'react'
import { FormParams, FormType } from './type'
import { Form } from 'react-router-dom';

function Form2({onClick, setAge, setCity}: FormParams) {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const nameInput = document.querySelector<HTMLInputElement>('input[type="text"]');
        const numberInput = document.querySelector<HTMLInputElement>('input[type="number"]');

        if (nameInput?.validity.valid && numberInput?.validity.valid) {
            onClick(FormType.complaint);
        } else {
            alert('Please fill in all required fields.');
        }
    };
    return (
        <>
            <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                Help us understand you better
            </h2>

            <Form action="" className='d-flex flex-column align-items-center'  onSubmit={handleSubmit}>
                <div style={{ borderBottom: '2px solid white' }} className='my-1 w-75' >
                    <input type="number" placeholder='Age' onChange={(e) => setAge?.(e.target.value)} required/>
                </div>
                <div className='d-flex my-1 w-75' style={{ borderBottom: '2px solid white' }}>
                    <input type="text" placeholder="City" onChange={(e) => {setCity?.(e.target.value)}} required/>
                </div>
                <div className='d-flex my-1 w-75' style={{ borderBottom: '2px solid white' }}>
                    <input type="text" placeholder="Company"/>
                </div>
                <input type="submit" value="Continue" className='cta-btn px-3 py-2 m-2'/>
            </Form  >
        </>
    )
}

export default Form2