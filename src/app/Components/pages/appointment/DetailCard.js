import React from 'react'
import AppointmentForm from './AppointmentForm'

const DetailCard = () => {
    return (
        <div className='appointment-carad-box'>
            <div className='appointment-carad-img'>
                <img src="/professionals/profile6.png" alt="image" />
            </div>
            <div className='appointments-timings'>
                <h5>Richiedi un appuntamento</h5>
                <ul>
                    <li>
                        <span>Lunedì</span>
                        <span>08:00 - 19:00</span>
                    </li>
                    <li>
                        <span>Martedì</span>
                        <span>08:00 - 19:00</span>
                    </li>
                    <li>
                        <span>Lunedì</span>
                        <span>08:00 - 19:00</span>
                    </li>
                    <li className='active-time'>
                        <span>Mercoledì</span>
                        <span>08:00 - 19:00</span>
                    </li>
                    <li>
                        <span>Giovedì</span>
                        <span>08:00 - 19:00</span>
                    </li>
                    <li>
                        <span>Venerdì</span>
                        <span>08:00 - 19:00</span>
                    </li>
                    <li>
                        <span>Domenica</span>
                        <span>08:00 - 19:00</span>
                    </li>
                </ul>
                <div className='appointment-detail-btn'>
                <button className='theme-btn-2 fw-bold w-100 mt-3' data-bs-toggle="offcanvas" data-bs-target="#detailCard" aria-controls="detailCard">Richiedi un appuntamento</button>
                </div>
            </div>
            <AppointmentForm/>
        </div>
    )
}

export default DetailCard