import React, { useState } from "react";
import Form1 from "./Form1";
import { FormType } from "./type";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Results from "./Results";



function BookingForm() {

    const [formType, setFormType] = useState(FormType.name)
    const [age, setAge] = useState()
    const [city, setCity] = useState('')

    function onClick(nextform: FormType) {
        setFormType(nextform)
    }

    function handleSetAge(age: any) {
        setAge(age)
    }

    function handleSetCity(city: string){
        setCity(city)
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
                    <Form2 onClick={onClick} setAge={handleSetAge} setCity={handleSetCity} />
                }
                {
                    formType === FormType.complaint &&
                    <Form3 onClick={onClick} age={age} city={city}/>
                }
                {
                    formType === FormType.experience &&
                    <Form4 onClick={onClick} city={city}/>
                }

                {/* results */}
                {
                    formType === FormType.realted_doctors &&
                    <Results />
                }
            </div>
        </div>
    )
}

export default BookingForm