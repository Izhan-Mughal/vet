import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <>
            <div className="modal fade" id="lgoinModal" tabIndex="-1" aria-labelledby="lgoinModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className='d-flex align-items-center justify-content-between'>
                                <h4 className="modal-title fw-500" id="lgoinModalLabel" style={{fontWeight:600}}>Login</h4>
                                <button type="button" className="btn p-0" data-bs-dismiss="modal" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 7L17 17M7 17L17 7" stroke="#050100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></button>
                            </div>
                            <p className='mt-2' style={{ color: '#939393', fontSize: '13px', fontWeight: 500 }}>Nuovo su Veterinari.pro? <span data-bs-toggle="modal" data-bs-target="#registrationModal" className='text-decoration-none fw-bold'  style={{ color: '#2B7980',cursor:'pointer' }}>Registrati</span></p>
                            <div className='login-form'>
                                <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Email</span>
                                <input type="text" placeholder='example@gmail.com' />
                            </div>
                            <div className='login-form'>
                                <span style={{ color: "#050100", fontSize: '14px', fontWeight: 500, marginBottom: '5px' }}>Password</span>
                                <input type="password" placeholder='password' />
                            </div>
                            <p className='ms-auto' style={{ width: 'max-content', fontSize: '14px', fontWeight: 500, color: '#2B7980' }}>Password dimenticata?</p>
                            <div className='login-btn-modal'>
                                <button className='theme-btn-2 w-100' style={{ fontSize: '16px', padding: '6px', fontWeight: 500 }}>Login</button>
                            </div>
                            <div className='login-line-breack'>
                                <span>Oppure</span>
                            </div>
                            <div className='login-btn-facebook mb-3'>
                                <button className='w-100' style={{ fontSize: '16px', fontWeight: 500 }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <rect width="24" height="24" transform="translate(0.5)" fill="#1877F2" />
                                    <path d="M24 12.0694C24 5.71811 18.8513 0.569391 12.5 0.569391C6.14872 0.569391 1 5.71811 1 12.0694C1 17.8094 5.20538 22.567 10.7031 23.4297V15.3936H7.7832V12.0694H10.7031V9.5358C10.7031 6.65361 12.42 5.06158 15.0468 5.06158C16.305 5.06158 17.6211 5.28619 17.6211 5.28619V8.11627H16.171C14.7424 8.11627 14.2969 9.00273 14.2969 9.91218V12.0694H17.4863L16.9765 15.3936H14.2969V23.4297C19.7946 22.567 24 17.8094 24 12.0694Z" fill="white" />
                                </svg> <span>Continue with Facebook</span></button>
                            </div>
                            <div className='login-btn-google  mb-3'>
                                <button className='w-100' style={{ fontSize: '16px', fontWeight: 500 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <rect width="24" height="24" transform="translate(0.5)" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23.54 12.2615C23.54 11.446 23.4668 10.6619 23.3309 9.90918H12.5V14.3576H18.6891C18.4225 15.7951 17.6123 17.013 16.3943 17.8285V20.714H20.1109C22.2855 18.7119 23.54 15.7637 23.54 12.2615Z" fill="#4285F4" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 23.4996C15.605 23.4996 18.2081 22.4698 20.1109 20.7134L16.3943 17.828C15.3645 18.518 14.0472 18.9257 12.5 18.9257C9.50474 18.9257 6.96951 16.9028 6.06519 14.1846H2.22314V17.1641C4.11542 20.9225 8.00451 23.4996 12.5 23.4996Z" fill="#34A853" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.06523 14.1855C5.83523 13.4955 5.70455 12.7584 5.70455 12.0005C5.70455 11.2425 5.83523 10.5055 6.06523 9.81548V6.83594H2.22318C1.44432 8.38844 1 10.1448 1 12.0005C1 13.8562 1.44432 15.6125 2.22318 17.165L6.06523 14.1855Z" fill="#FBBC05" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 5.07386C14.1884 5.07386 15.7043 5.65409 16.8961 6.79364L20.1945 3.49523C18.2029 1.63955 15.5997 0.5 12.5 0.5C8.00451 0.5 4.11542 3.07705 2.22314 6.83545L6.06519 9.815C6.96951 7.09682 9.50474 5.07386 12.5 5.07386Z" fill="#E95744" />
                                    </svg>
                                    <span>Continue with Google</span></button>
                            </div>
                            <div className='login-btn-apple'>
                                <button className='w-100' style={{ fontSize: '16px', fontWeight: 500 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect width="24" height="24" fill="black" />
                                        <path d="M21.2807 18.424C20.9328 19.2275 20.5211 19.9672 20.0441 20.6472C19.3939 21.5743 18.8615 22.216 18.4512 22.5724C17.8152 23.1573 17.1337 23.4568 16.404 23.4739C15.8801 23.4739 15.2483 23.3248 14.5129 23.0224C13.7751 22.7214 13.097 22.5724 12.4771 22.5724C11.8268 22.5724 11.1295 22.7214 10.3836 23.0224C9.6365 23.3248 9.03469 23.4824 8.57456 23.498C7.87478 23.5278 7.17728 23.2197 6.48105 22.5724C6.03669 22.1848 5.48087 21.5204 4.81503 20.5791C4.10063 19.5739 3.51329 18.4084 3.05317 17.0795C2.56038 15.6442 2.31335 14.2543 2.31335 12.9087C2.31335 11.3673 2.64642 10.0379 3.31354 8.92385C3.83784 8.029 4.53534 7.32312 5.40832 6.80493C6.2813 6.28674 7.22456 6.02267 8.24036 6.00578C8.79618 6.00578 9.52506 6.1777 10.4308 6.51559C11.334 6.85462 11.914 7.02655 12.1683 7.02655C12.3584 7.02655 13.0026 6.82552 14.0948 6.42473C15.1277 6.05305 15.9994 5.89916 16.7135 5.95978C18.6485 6.11595 20.1023 6.87876 21.0691 8.25303C19.3385 9.30163 18.4824 10.7703 18.4995 12.6544C18.5151 14.122 19.0475 15.3432 20.0938 16.3129C20.568 16.7629 21.0975 17.1107 21.6867 17.3578C21.5589 17.7283 21.4241 18.0832 21.2807 18.424ZM16.8427 0.960131C16.8427 2.11039 16.4224 3.18439 15.5848 4.17847C14.574 5.36023 13.3513 6.04311 12.0254 5.93536C12.0086 5.79736 11.9988 5.65213 11.9988 5.49951C11.9988 4.39526 12.4795 3.21349 13.3331 2.24724C13.7593 1.75801 14.3014 1.35122 14.9587 1.02671C15.6146 0.707053 16.235 0.530273 16.8185 0.5C16.8356 0.653772 16.8427 0.807554 16.8427 0.960116V0.960131Z" fill="white" />
                                    </svg>
                                    <span>Continue with Apple</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login