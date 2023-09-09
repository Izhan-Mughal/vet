import Link from 'next/link'
import React from 'react'
import Login from '../Modals/Login'
import RegistrationModal from '../Modals/RegistrationModal'
import RegistrationForm from '../Modals/RegistrationForm'

export const Header = () => {
    return (
        <>
            <section>
                <header>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link href='/'>
                                 <img src="/logo.png" className='logo' alt="" />
                            </Link>
                            <button className="d-lg-none d-block btn border-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
                                    <path d="M20 13.005C20 13.555 19.554 14 19.005 14H10.995C10.7311 14 10.478 13.8952 10.2914 13.7086C10.1048 13.522 10 13.2689 10 13.005C10 12.7411 10.1048 12.488 10.2914 12.3014C10.478 12.1148 10.7311 12.01 10.995 12.01H19.005C19.555 12.01 20 12.455 20 13.005ZM20 7C20 7.55 19.554 7.995 19.005 7.995H0.995C0.731109 7.995 0.478028 7.89017 0.291429 7.70357C0.10483 7.51697 0 7.26389 0 7C0 6.73611 0.10483 6.48303 0.291429 6.29643C0.478028 6.10983 0.731109 6.005 0.995 6.005H19.005C19.555 6.005 20 6.451 20 7ZM19.005 1.99C19.2689 1.99 19.522 1.88517 19.7086 1.69857C19.8952 1.51197 20 1.25889 20 0.995C20 0.731109 19.8952 0.478027 19.7086 0.291429C19.522 0.10483 19.2689 7.86455e-09 19.005 0H6.995C6.86433 -3.89413e-09 6.73495 0.0257364 6.61423 0.0757399C6.49351 0.125743 6.38382 0.199034 6.29143 0.291429C6.19903 0.383823 6.12574 0.493511 6.07574 0.61423C6.02574 0.734949 6 0.864335 6 0.995C6 1.12567 6.02574 1.25505 6.07574 1.37577C6.12574 1.49649 6.19903 1.60618 6.29143 1.69857C6.38382 1.79097 6.49351 1.86426 6.61423 1.91426C6.73495 1.96426 6.86433 1.99 6.995 1.99H19.005Z" fill="white" />
                                </svg>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a to='/'>Sei un veterinario?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a to='/'>Chi siamo</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='/prizes' className='text-white text-decoration-none'>Prezzi</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a to='/'>Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a to='/'>FAQ</a>
                                    </li>
                                </ul>
                                <div className='d-flex gap-3 header-btn'>
                                    <button className='theme-btn fw-bold' data-bs-toggle="modal" data-bs-target="#lgoinModal">
                                        Accedi
                                    </button>
                                    <button className='theme-btn-2 fw-bold'>
                                        Vai al gestionale
                                    </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </section>
            <Login/>
            <RegistrationModal/>
            <RegistrationForm/>
        </>
    )
}
