import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='display-4 text-white'>
                {'This Magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            <div className="center">
                <div className="p-4 shadow border border-secondary form center">
                    <input className="p-2" type='text' onChange={ onInputChange } />
                    <button 
                        className="btn btn-info w-25 hover-zoom display-4 d-inline-block p-2"
                        onClick={ onButtonSubmit }>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;