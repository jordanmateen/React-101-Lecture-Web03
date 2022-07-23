import React, { useState } from 'react'
import Input from './Input'
import ClickyThing from './Button'

function SignUpForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [isValidFirstName, setIsValidFirstName] = useState(false)
    const [isValidLastName, setIsValidLastName] = useState(false)
    const [isValidEmailAddress, setIsValidEmailAddress] = useState(false)

    const handleFirstNameChange = (event) => {
        setIsValidFirstName(event.target.value.length >= 3);
    }
    
    const handleFirstNameBlur = (event) =>{
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setIsValidLastName(event.target.value.length >= 3);
        console.log(event.target.value)
    }

    const handleLastNameBlur = (event) =>{
        setLastName(event.target.value)
    }

    const handleEmailAddressChange = (event) => {
        const isValidEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(event.target.value)
        setIsValidEmailAddress(isValidEmail)
        console.log(isValidEmail)
    }
    
    const handleEmailAddressBlur = (event) =>{
        setEmailAddress(event.target.value)
    }

    const handleSignUpClick = () => {
        console.table({firstName, lastName, emailAddress})
        console.log(isButtonDisabled)
    }

    const isButtonDisabled = isValidFirstName && isValidLastName && isValidEmailAddress
    const variantToggle = !isButtonDisabled ? "outline-secondary": "success"

    return (
        <>
            <Input label="First Name" handleChange={handleFirstNameChange} handleBlur={handleFirstNameBlur}/>
            <Input label="Last Name" handleChange={handleLastNameChange} handleBlur={handleLastNameBlur} isInputDisabled={!isValidFirstName}/>
            <Input label="Email Address" handleChange={handleEmailAddressChange} handleBlur={handleEmailAddressBlur} isInputDisabled={!isValidLastName}/>
            <ClickyThing handleEvent= {handleSignUpClick} btnName="Success" variant={variantToggle} isButtonDisabled={!isButtonDisabled} /> {/** Button */}
        </>
    )
}

export default SignUpForm
