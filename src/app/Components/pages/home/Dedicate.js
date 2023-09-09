import React from 'react'


const Dedicate = () => {
    return (
        <>
            <section className='dedicate-section bg-white'>
                <div className='container'>
                    <h2 className='text-center dedicate-heading fw-500'>Dedica il tuo <span className='fw-bold text-theme'>tempo</span> a chi vuoi bene</h2>
                    <div className='row justify-content-center gap-4 dedicate-row'>
                        <div className='col-lg-3 dedicate-col'>
                            <div className='dedicate-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.0953 18.2392L12.0001 18.3344L11.8953 18.2392C7.3715 14.1344 4.38102 11.4202 4.38102 8.66778C4.38102 6.76302 5.80959 5.33445 7.71435 5.33445C9.18102 5.33445 10.6096 6.28683 11.1144 7.58207H12.8858C13.3905 6.28683 14.8191 5.33445 16.2858 5.33445C18.1905 5.33445 19.6191 6.76302 19.6191 8.66778C19.6191 11.4202 16.6286 14.1344 12.0953 18.2392ZM16.2858 3.42969C14.6286 3.42969 13.0382 4.20112 12.0001 5.41064C10.962 4.20112 9.3715 3.42969 7.71435 3.42969C4.78102 3.42969 2.47626 5.72493 2.47626 8.66778C2.47626 12.2583 5.71435 15.2011 10.6191 19.6487L12.0001 20.9059L13.381 19.6487C18.2858 15.2011 21.5239 12.2583 21.5239 8.66778C21.5239 5.72493 19.2191 3.42969 16.2858 3.42969Z" fill="#E95744" />
                                </svg>
                            </div>
                            <div className='dedicate-title'>
                                <h4>Cura completa</h4>
                            </div>
                            <div className='dedicate-p'>
                                <p>Organizza la salute e il benessere del tuo animale con facilità e tranquillità</p>
                            </div>
                        </div>
                        <div className='col-lg-3 dedicate-col'>
                            <div className='dedicate-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.42858 2.0957C7.63065 2.0957 7.82444 2.17597 7.96733 2.31886C8.11021 2.46174 8.19048 2.65554 8.19048 2.85761V3.61951H15.8095V2.85761C15.8095 2.65554 15.8898 2.46174 16.0327 2.31886C16.1756 2.17597 16.3694 2.0957 16.5714 2.0957C16.7735 2.0957 16.9673 2.17597 17.1102 2.31886C17.2531 2.46174 17.3333 2.65554 17.3333 2.85761V3.61951H19.6191C20.2253 3.61951 20.8066 3.86033 21.2353 4.28898C21.664 4.71764 21.9048 5.29902 21.9048 5.90523V19.6195C21.9048 20.2257 21.664 20.8071 21.2353 21.2358C20.8066 21.6644 20.2253 21.9052 19.6191 21.9052H4.38096C3.77475 21.9052 3.19337 21.6644 2.76472 21.2358C2.33606 20.8071 2.09525 20.2257 2.09525 19.6195V5.90523C2.09525 5.29902 2.33606 4.71764 2.76472 4.28898C3.19337 3.86033 3.77475 3.61951 4.38096 3.61951H6.66667V2.85761C6.66667 2.65554 6.74695 2.46174 6.88983 2.31886C7.03272 2.17597 7.22651 2.0957 7.42858 2.0957ZM15.8095 5.14332V5.90523C15.8095 6.1073 15.8898 6.30109 16.0327 6.44397C16.1756 6.58686 16.3694 6.66713 16.5714 6.66713C16.7735 6.66713 16.9673 6.58686 17.1102 6.44397C17.2531 6.30109 17.3333 6.1073 17.3333 5.90523V5.14332H19.6191C19.8211 5.14332 20.0149 5.22359 20.1578 5.36648C20.3007 5.50936 20.381 5.70316 20.381 5.90523V8.19094H3.61905V5.90523C3.61905 5.70316 3.69933 5.50936 3.84221 5.36648C3.9851 5.22359 4.17889 5.14332 4.38096 5.14332H6.66667V5.90523C6.66667 6.1073 6.74695 6.30109 6.88983 6.44397C7.03272 6.58686 7.22651 6.66713 7.42858 6.66713C7.63065 6.66713 7.82444 6.58686 7.96733 6.44397C8.11021 6.30109 8.19048 6.1073 8.19048 5.90523V5.14332H15.8095ZM3.61905 9.71475V19.6195C3.61905 19.8216 3.69933 20.0154 3.84221 20.1583C3.9851 20.3011 4.17889 20.3814 4.38096 20.3814H19.6191C19.8211 20.3814 20.0149 20.3011 20.1578 20.1583C20.3007 20.0154 20.381 19.8216 20.381 19.6195V9.71475H3.61905ZM11.2381 12.0005C11.2381 11.7984 11.3184 11.6046 11.4613 11.4617C11.6041 11.3188 11.7979 11.2386 12 11.2386C12.2021 11.2386 12.3959 11.3188 12.5388 11.4617C12.6816 11.6046 12.7619 11.7984 12.7619 12.0005C12.7619 12.2025 12.6816 12.3963 12.5388 12.5392C12.3959 12.6821 12.2021 12.7624 12 12.7624C11.7979 12.7624 11.6041 12.6821 11.4613 12.5392C11.3184 12.3963 11.2381 12.2025 11.2381 12.0005ZM15.0476 11.2386C14.8456 11.2386 14.6518 11.3188 14.5089 11.4617C14.366 11.6046 14.2857 11.7984 14.2857 12.0005C14.2857 12.2025 14.366 12.3963 14.5089 12.5392C14.6518 12.6821 14.8456 12.7624 15.0476 12.7624C15.2497 12.7624 15.4435 12.6821 15.5864 12.5392C15.7293 12.3963 15.8095 12.2025 15.8095 12.0005C15.8095 11.7984 15.7293 11.6046 15.5864 11.4617C15.4435 11.3188 15.2497 11.2386 15.0476 11.2386ZM17.3333 12.0005C17.3333 11.7984 17.4136 11.6046 17.5565 11.4617C17.6994 11.3188 17.8932 11.2386 18.0952 11.2386C18.2973 11.2386 18.4911 11.3188 18.634 11.4617C18.7769 11.6046 18.8572 11.7984 18.8572 12.0005C18.8572 12.2025 18.7769 12.3963 18.634 12.5392C18.4911 12.6821 18.2973 12.7624 18.0952 12.7624C17.8932 12.7624 17.6994 12.6821 17.5565 12.5392C17.4136 12.3963 17.3333 12.2025 17.3333 12.0005ZM18.0952 14.2862C17.8932 14.2862 17.6994 14.3665 17.5565 14.5093C17.4136 14.6522 17.3333 14.846 17.3333 15.0481C17.3333 15.2502 17.4136 15.4439 17.5565 15.5868C17.6994 15.7297 17.8932 15.81 18.0952 15.81C18.2973 15.81 18.4911 15.7297 18.634 15.5868C18.7769 15.4439 18.8572 15.2502 18.8572 15.0481C18.8572 14.846 18.7769 14.6522 18.634 14.5093C18.4911 14.3665 18.2973 14.2862 18.0952 14.2862ZM14.2857 15.0481C14.2857 14.846 14.366 14.6522 14.5089 14.5093C14.6518 14.3665 14.8456 14.2862 15.0476 14.2862C15.2497 14.2862 15.4435 14.3665 15.5864 14.5093C15.7293 14.6522 15.8095 14.846 15.8095 15.0481C15.8095 15.2502 15.7293 15.4439 15.5864 15.5868C15.4435 15.7297 15.2497 15.81 15.0476 15.81C14.8456 15.81 14.6518 15.7297 14.5089 15.5868C14.366 15.4439 14.2857 15.2502 14.2857 15.0481ZM12 14.2862C11.7979 14.2862 11.6041 14.3665 11.4613 14.5093C11.3184 14.6522 11.2381 14.846 11.2381 15.0481C11.2381 15.2502 11.3184 15.4439 11.4613 15.5868C11.6041 15.7297 11.7979 15.81 12 15.81C12.2021 15.81 12.3959 15.7297 12.5388 15.5868C12.6816 15.4439 12.7619 15.2502 12.7619 15.0481C12.7619 14.846 12.6816 14.6522 12.5388 14.5093C12.3959 14.3665 12.2021 14.2862 12 14.2862ZM8.19048 15.0481C8.19048 14.846 8.27076 14.6522 8.41364 14.5093C8.55653 14.3665 8.75032 14.2862 8.95239 14.2862C9.15446 14.2862 9.34825 14.3665 9.49114 14.5093C9.63402 14.6522 9.71429 14.846 9.71429 15.0481C9.71429 15.2502 9.63402 15.4439 9.49114 15.5868C9.34825 15.7297 9.15446 15.81 8.95239 15.81C8.75032 15.81 8.55653 15.7297 8.41364 15.5868C8.27076 15.4439 8.19048 15.2502 8.19048 15.0481ZM5.90477 14.2862C5.7027 14.2862 5.50891 14.3665 5.36602 14.5093C5.22314 14.6522 5.14286 14.846 5.14286 15.0481C5.14286 15.2502 5.22314 15.4439 5.36602 15.5868C5.50891 15.7297 5.7027 15.81 5.90477 15.81C6.10684 15.81 6.30063 15.7297 6.44352 15.5868C6.5864 15.4439 6.66667 15.2502 6.66667 15.0481C6.66667 14.846 6.5864 14.6522 6.44352 14.5093C6.30063 14.3665 6.10684 14.2862 5.90477 14.2862ZM5.14286 18.0957C5.14286 17.8936 5.22314 17.6998 5.36602 17.557C5.50891 17.4141 5.7027 17.3338 5.90477 17.3338C6.10684 17.3338 6.30063 17.4141 6.44352 17.557C6.5864 17.6998 6.66667 17.8936 6.66667 18.0957C6.66667 18.2978 6.5864 18.4916 6.44352 18.6345C6.30063 18.7773 6.10684 18.8576 5.90477 18.8576C5.7027 18.8576 5.50891 18.7773 5.36602 18.6345C5.22314 18.4916 5.14286 18.2978 5.14286 18.0957ZM8.95239 17.3338C8.75032 17.3338 8.55653 17.4141 8.41364 17.557C8.27076 17.6998 8.19048 17.8936 8.19048 18.0957C8.19048 18.2978 8.27076 18.4916 8.41364 18.6345C8.55653 18.7773 8.75032 18.8576 8.95239 18.8576C9.15446 18.8576 9.34825 18.7773 9.49114 18.6345C9.63402 18.4916 9.71429 18.2978 9.71429 18.0957C9.71429 17.8936 9.63402 17.6998 9.49114 17.557C9.34825 17.4141 9.15446 17.3338 8.95239 17.3338ZM11.2381 18.0957C11.2381 17.8936 11.3184 17.6998 11.4613 17.557C11.6041 17.4141 11.7979 17.3338 12 17.3338C12.2021 17.3338 12.3959 17.4141 12.5388 17.557C12.6816 17.6998 12.7619 17.8936 12.7619 18.0957C12.7619 18.2978 12.6816 18.4916 12.5388 18.6345C12.3959 18.7773 12.2021 18.8576 12 18.8576C11.7979 18.8576 11.6041 18.7773 11.4613 18.6345C11.3184 18.4916 11.2381 18.2978 11.2381 18.0957ZM15.0476 17.3338C14.8456 17.3338 14.6518 17.4141 14.5089 17.557C14.366 17.6998 14.2857 17.8936 14.2857 18.0957C14.2857 18.2978 14.366 18.4916 14.5089 18.6345C14.6518 18.7773 14.8456 18.8576 15.0476 18.8576C15.2497 18.8576 15.4435 18.7773 15.5864 18.6345C15.7293 18.4916 15.8095 18.2978 15.8095 18.0957C15.8095 17.8936 15.7293 17.6998 15.5864 17.557C15.4435 17.4141 15.2497 17.3338 15.0476 17.3338Z" fill="#E0642B" />
                                </svg>
                            </div>
                            <div className='dedicate-title'>
                                <h4>Zero stress</h4>
                            </div>
                            <div className='dedicate-p'>
                                <p>Programma e gestisci gli appuntamenti per il tuo animale con semplicità e comodità</p>
                            </div>
                        </div>
                        <div className='col-lg-3 dedicate-col'>
                            <div className='dedicate-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10.9943 1.76172H13.0057C14.7562 1.76172 16.1428 1.76172 17.2276 1.90743C18.3438 2.05791 19.2476 2.3741 19.9609 3.08648C20.6733 3.79981 20.9895 4.70362 21.14 5.81981C21.2857 6.90553 21.2857 8.29124 21.2857 10.0417V13.9579C21.2857 15.7084 21.2857 17.0951 21.14 18.1798C20.9895 19.296 20.6733 20.1998 19.9609 20.9131C19.2476 21.6255 18.3438 21.9417 17.2276 22.0922C16.1419 22.2379 14.7562 22.2379 13.0057 22.2379H10.9943C9.24379 22.2379 7.85712 22.2379 6.77236 22.0922C5.65617 21.9417 4.75236 21.6255 4.03903 20.9131C3.32664 20.1998 3.01045 19.296 2.85998 18.1798C2.71426 17.0941 2.71426 15.7084 2.71426 13.9579V10.0417C2.71426 8.29124 2.71426 6.90458 2.85998 5.81981C3.01045 4.70362 3.32664 3.79981 4.03903 3.08648C4.75236 2.3741 5.65617 2.05791 6.77236 1.90743C7.85807 1.76172 9.24379 1.76172 10.9943 1.76172ZM6.96188 3.32362C6.00379 3.4522 5.45141 3.6941 5.0476 4.09696C4.64569 4.49981 4.40379 5.05219 4.27522 6.01029C4.14379 6.98934 4.14188 8.27886 4.14188 10.0951V13.9046C4.14188 15.7208 4.14379 17.0112 4.27522 17.9903C4.40379 18.9474 4.64569 19.4998 5.04855 19.9027C5.45141 20.3055 6.00379 20.5474 6.96188 20.676C7.94093 20.8074 9.23045 20.8093 11.0466 20.8093H12.9514C14.7676 20.8093 16.0581 20.8074 17.0371 20.676C17.9943 20.5474 18.5466 20.3055 18.9495 19.9027C19.3524 19.4998 19.5943 18.9474 19.7228 17.9893C19.8543 17.0112 19.8562 15.7208 19.8562 13.9046V10.0951C19.8562 8.27886 19.8543 6.98934 19.7228 6.00934C19.5943 5.0522 19.3524 4.49981 18.9495 4.09696C18.5466 3.6941 17.9943 3.4522 17.0362 3.32362C16.0581 3.1922 14.7676 3.19029 12.9514 3.19029H11.0466C9.23045 3.19029 7.94188 3.1922 6.96188 3.32362ZM7.47617 10.0951C7.47617 9.90561 7.55142 9.72393 7.68538 9.58998C7.81933 9.45602 8.00101 9.38077 8.19045 9.38077H15.8095C15.9989 9.38077 16.1806 9.45602 16.3146 9.58998C16.4485 9.72393 16.5238 9.90561 16.5238 10.0951C16.5238 10.2845 16.4485 10.4662 16.3146 10.6001C16.1806 10.7341 15.9989 10.8093 15.8095 10.8093H8.19045C8.00101 10.8093 7.81933 10.7341 7.68538 10.6001C7.55142 10.4662 7.47617 10.2845 7.47617 10.0951ZM7.47617 13.9046C7.47617 13.7151 7.55142 13.5335 7.68538 13.3995C7.81933 13.2655 8.00101 13.1903 8.19045 13.1903H12.9524C13.1418 13.1903 13.3235 13.2655 13.4574 13.3995C13.5914 13.5335 13.6666 13.7151 13.6666 13.9046C13.6666 14.094 13.5914 14.2757 13.4574 14.4097C13.3235 14.5436 13.1418 14.6189 12.9524 14.6189H8.19045C8.00101 14.6189 7.81933 14.5436 7.68538 14.4097C7.55142 14.2757 7.47617 14.094 7.47617 13.9046Z" fill="#189CE0" />
                                </svg>
                            </div>
                            <div className='dedicate-title'>
                                <h4>All in one</h4>
                            </div>
                            <div className='dedicate-p'>
                                <p>Tieni traccia dei dati sanitari, delle terapie e delle note del tuo animale in un unico luogo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dedicate