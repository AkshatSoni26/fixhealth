import React from 'react'
import { FormParams, FormType } from './type'
import { Form, useNavigate } from 'react-router-dom'

function Form4({ onClick, city }: FormParams) {
    const navigate = useNavigate()
    return (
        <>
            <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                Help us understand you better your problem
            </h2>
            <Form action="" className='d-flex flex-column align-items-center'>
                <textarea placeholder='Any previous experience with physiotherapy..' className="w-75" rows={5} />
                <input type="button" value="Continue" className='cta-btn px-3 py-2 m-2' onClick={() => {
                    navigate(`/${city}`)
                    onClick(FormType.realted_doctors)
                }} />
            </Form>
        </>
    )
}

export default Form4