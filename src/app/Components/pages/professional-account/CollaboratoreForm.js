import React from 'react'

const CollaboratoreForm = () => {
    return (
        <>
            <div className='collaborate-form'>
                <h6 className='mb-3'>Nuovo collaboratore</h6>
                <div className='form-group'>
                    <label htmlFor="">Titolo</label>
                    <input type="text" placeholder='Titolo' />
                </div>
                <div className='d-flex gap-2 w-100 collab2Fields'>
                    <div className='form-group w-100'>
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder='Nome' />
                    </div>
                    <div className='form-group w-100'>
                        <label htmlFor="">Cognome</label>
                        <input type="text" placeholder='Cognome' />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Numero di telefono</label>
                    <div className='d-flex gap-2'>
                        <select class="form-select" style={{ width: 80 }}>
                            <option selected>+92</option>
                            <option value="1">+92</option>
                            <option value="2">+92</option>
                            <option value="3">+92</option>
                        </select>
                        <input type="text" placeholder='032432435445' style={{ width: '100%' }} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor="">Email (opzionale)</label>
                    <input type="email" placeholder='Email Address' />
                </div>
                <div className='d-flex justify-content-end mt-3'>
                    <button className='theme-btn-2 fw-bold collabbtn' style={{ fontSize: 14 }} data-bs-dismiss="offcanvas" aria-label="Close">Aggiungi nuovo collaboratore</button>
                </div>
            </div >
        </>
    )
}

export default CollaboratoreForm