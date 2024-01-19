import React, { useState } from "react";
import Form1 from "./Form1";
import { FormType } from "./type";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";



function BookingForm() {

    const [formType, setFormType] = useState(FormType.name)
    const [age, setAge] = useState()

    function onClick(nextform: FormType) {
        setFormType(nextform)
    }

    function handleSetAge(age: any) {
        setAge(age)
    }

    return (
        <div className="for-second-page">
            <div id='BookingForm' className='p-4 m-3 d-flex flex-column justify-content-center'>
                {
                    formType === FormType.name &&
                    <Form1 onClick={onClick} />
                }
                {
                    formType === FormType.age &&
                    <Form2 onClick={onClick} setAge={handleSetAge} />
                }
                {
                    formType === FormType.complaint &&
                    <Form3 onClick={onClick} age={age}/>
                }
                {
                    formType === FormType.experience &&
                    <Form4 onClick={onClick} />
                }

                {/* results */}
                {
                    formType === FormType.realted_doctors &&
                    <div>
                        this is realted doctors for you
                    </div>
                }
            </div>
        </div>
    )
}

export default BookingForm