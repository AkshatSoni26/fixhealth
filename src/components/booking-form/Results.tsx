import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { useParams } from 'react-router-dom'
import { url } from '../../constant/constant'
import { doctor } from './type'

function Results() {
  const { city } = useParams()
  const [data, setData] = useState([])
  const image_address = 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg'
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.record.doctors);
  }

  useEffect(
    () => {
      getData()

      const BookingForm = document.getElementById('BookingForm')
      if (BookingForm) {
        BookingForm.style.width = '570px';
      }
    }, []
  )

  return (
    <div>
      {
        data
          ?
          <>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              style={{color: 'black'}}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  Appointment Confirmation
                </Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <div>
                  Your appointment book succesfully.
                  for your reference your booking time is <strong>xx:xx</strong> at at address <strong>xxxxxxxxxxxxxxxxxx.</strong>
                </div>
                <div>
                <input type="button" value="confirm" className='cta-btn px-3 py-2 m-2' style={{ float: 'right'}} onClick={handleClose} />
                </div>
              </Modal.Body>
            </Modal>

            <div className='results' style={{ width: '540px' }}>
              <h2 className='cta-line d-flex flex-column justify-content-center align-items-center'>
                Doctors available in your "{city}" is
              </h2>
              <div className='overflow-auto' style={{ height: '400px', }}>
                {
                  data.map(
                    (doc: doctor, id) => {
                      return (
                        <div key={id} className='d-flex m-3 alig-items-center justify-content-between' >
                          <div className='d-flex'>
                            <img className='doc-img me-3' src={image_address} alt={doc.name} />
                            <div>
                              <div>{doc.name}</div>
                              <div> <strong>{doc.expertise}</strong> </div>
                            </div>
                          </div>
                          <input type="button" value="Book an Appointment" className='cta-btn px-3 py-2 m-2' onClick={handleShow} />
                        </div>
                      )
                    }
                  )
                }
              </div>
            </div>
          </>
          :
          <>Loading...</>
      }
    </div>
  )
}

export default Results