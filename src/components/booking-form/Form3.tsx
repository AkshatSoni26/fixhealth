import React from 'react'
import { FormParams, FormType } from './type'
import { Form, useNavigate } from 'react-router-dom'

function Form3({ onClick, age, city }: FormParams) {
    const navigate = useNavigate()
    return (
        <>
            <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                Tell us what is your problem
            </h2>
            <Form action="" className='d-flex flex-column align-items-center'>

                <textarea placeholder='Please describe your current problem...' className="w-75" rows={5}/>
                <input type="button" value="Continue" className='cta-btn px-3 py-2 m-2' onClick={() => {
                    if (Number(age) >= 40) {
                        onClick(FormType.experience)
                    }
                    else {
                        onClick(FormType.realted_doctors)
                        navigate(`/${city}`)
                    }
                }} />
            </Form>
        </>
    )
}

export default Form3