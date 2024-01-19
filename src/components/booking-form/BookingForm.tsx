import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

enum FormType {
    'name',
    'age',
    'complaint',
    'experience',
    'realted_doctors'
}


function BookingForm() {

    const [formType, setFormType] = useState(FormType.name)


    function onClick(nextform: FormType) {
        setFormType(nextform)
    }

    return (
        <div id='BookingForm' className='p-4 m-3 d-flex flex-column justify-content-center'>

            {/* 1 */}
            {
                formType === FormType.name &&
                <>
                    <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                        Book an Appointment for
                        <br />
                        <span style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}> Rs 1000 </span>
                        <strong>
                            FREE
                        </strong>
                    </h2>
                    <p style={{ color: '#1886A4', }} >60+ Expert Physiotherapists for 200+ Conditions</p>
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
            }

            {/* 2 */}
            {
                formType === FormType.age &&
                <>
                    <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                        Help us understand you better
                    </h2>
                    <form action="" className='d-flex flex-column align-items-center'>
                        <div style={{ borderBottom: '2px solid white' }} className='my-1 w-75' >
                            <input type="number" placeholder='Age' />
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
            }

            {/* 3 */}
            {
                formType === FormType.complaint &&
                <>
                    <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                        Tell us what is your problem
                    </h2>
                    <form action="" className='d-flex flex-column align-items-center'>
                        <textarea placeholder='Please describe your current problem...' className="w-75" />
                        <input type="button" value="Continue" className='cta-btn px-3 py-2 m-2' onClick={() => onClick(FormType.experience)} />
                    </form>
                </>
            }

            {/* 4 */}
            {
                formType === FormType.experience &&
                <>
                    <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                    Help us understand you better your problem
                    </h2>
                <form action="" className='d-flex flex-column align-items-center'>
                    <textarea placeholder='Any previous experience with physiotherapy..' className="w-75" />
                    <input type="button" value="Continue" className='cta-btn px-3 py-2 m-2' onClick={() => onClick(FormType.realted_doctors)} />
                </form>
                </>
            }

            {/* results */}
            {
                formType === FormType.realted_doctors &&
                <div>
                    this is realted doctors for you
                </div>
            }


        </div>
    )
}

export default BookingForm