import React from 'react'

function TestimonialCard() {
    const sample_image = 'https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
    return (
        <div className="m-3 "
            style={{ backgroundColor: 'black', color: 'white', width: '280px', height: '480px', borderRadius: '12px', boxShadow: "0 0 9px -6px white" }}
        >
            <p className='p-3 m-0' style={{ backgroundColor: '#00ACC1', borderRadius: '12px 12px 0 0' }}>Lorem ipsum dolor sit amet.</p>
            <img src={sample_image} alt="" style={{ width: '280px', height: '150px' }} />
            <img style={{ transform: 'translate(216px, -54px)' }} src='https://www.fixhealth.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftcfp7i31d%2Fspinal-icon_OASEt8ZaM.png%3FupdatedAt%3D1685626136193&w=64&q=75' />
            <div style={{transform: 'translateY(-58px)'}}>
                <p className='m-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis, odio aliquam non culpa molestias quidem? Voluptatibus minus, et nulla at nemo esse ex itaque a iusto reprehenderit iure? Facilis.</p>
                <div className='m-3 mb-0'>
                    <strong>dummy name</strong>
                </div>
                <div className='m-3 mt-0'>
                    <strong>dummy address</strong> <span>⭐⭐⭐⭐⭐</span>
                </div>
            </div>

        </div>
    )
}

export default TestimonialCard