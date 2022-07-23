import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Input({label, handleChange, handleBlur, isInputDisabled}) {
    return (
        <>
            <FloatingLabel controlId="floatingInput" label={label} className="mb-3">
                <Form.Control type="text" onChange={handleChange} onBlur={handleBlur} disabled ={isInputDisabled}/>
            </FloatingLabel>
        </>
    )
}

export default Input
