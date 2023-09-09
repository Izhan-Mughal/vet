import React from 'react'

const Cordinates = () => {
    return (
        <>
            <section className='py-5 row'>
                <div className='col-md-5'>
                    <div className='form-group pro-account-input'>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Clinica' />
                    </div>
                    <div className='form-group pro-account-input'>
                        <label htmlFor="">Numero di telefono</label>
                        <div className='d-flex align-items-center gap-2 w-100'>
                            <div className='position-relative'>
                                <select name="" id="" placeholder='+92'>
                                    <option value="">+92</option>
                                    <option value="">+92</option>
                                    <option value="">+92</option>
                                    <option value="">+92</option>
                                    <option value="">+92</option>
                                </select>
                                <svg xmlns="http://www.w3.org/2000/svg" className='countrycode-pro-arrow' width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12.78 5.47025C12.8497 5.53981 12.9049 5.62243 12.9426 5.71337C12.9803 5.80431 12.9998 5.9018 12.9998 6.00025C12.9998 6.0987 12.9803 6.19618 12.9426 6.28712C12.9049 6.37806 12.8497 6.46068 12.78 6.53025L8.53 10.7802C8.46044 10.8499 8.37782 10.9052 8.28688 10.9429C8.19594 10.9806 8.09845 11 8 11C7.90155 11 7.80407 10.9806 7.71312 10.9429C7.62218 10.9052 7.53957 10.8499 7.47 10.7802L3.22 6.53025C3.1504 6.46064 3.09519 6.37802 3.05752 6.28708C3.01986 6.19614 3.00047 6.09868 3.00047 6.00025C3.00047 5.90182 3.01986 5.80435 3.05752 5.71341C3.09519 5.62247 3.1504 5.53985 3.22 5.47025C3.2896 5.40065 3.37223 5.34544 3.46317 5.30777C3.5541 5.2701 3.65157 5.25071 3.75 5.25071C3.84843 5.25071 3.9459 5.2701 4.03683 5.30777C4.12777 5.34544 4.2104 5.40065 4.28 5.47025L8 9.18925L11.72 5.47025C11.7896 5.40058 11.8722 5.34531 11.9631 5.30761C12.0541 5.2699 12.1516 5.25049 12.25 5.25049C12.3485 5.25049 12.4459 5.2699 12.5369 5.30761C12.6278 5.34531 12.7104 5.40058 12.78 5.47025Z" fill="#939393" />
                                </svg>
                            </div>
                            <div className='w-100'>
                                <input type="text" placeholder='335646323' />
                            </div>
                        </div>
                    </div>
                    <div className='form-group pro-account-input'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='example@gmail.com' />
                    </div>
                    <div className='form-group pro-account-input'>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' />
                    </div>
                    <div className='form-group pro-account-input'>
                        <label htmlFor="">Indirizzo</label>
                        <input type="text" placeholder='Indirizzo' />
                    </div>
                    <div className='form-group pro-account-input'>
                        <label htmlFor="">Descrivi la tua attività</label>
                        <textarea rows="5" placeholder='Descrivi la tua attività'></textarea>
                    </div>
                    <div className='form-group pro-account-input'>
                        <button className='theme-btn-2 w-100'>Salva</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Cordinates