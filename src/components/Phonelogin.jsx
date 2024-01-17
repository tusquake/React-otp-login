import React, { useState } from 'react'
import OtpInput from './OtpInput';

const Phonelogin = () => {
    const [phoneNumber, setphoneNumber] = useState("");
    const [showotpInput, setshowotpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setphoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();

        //Phone Validation
        const regex = /[^0-9]/g;
        if(phoneNumber.length<10 || phoneNumber.length>10 || regex.test(phoneNumber)){
            alert("Invalid Phone Number");
            return;
        }
        //call by API
        //show OTP field
        setshowotpInput(true);

        

    };

    const onOtpSubmit = (otp) =>{
        console.log("Login Successful");
    }

  return (
    <div>
      {!showotpInput ? <form onSubmit={handlePhoneSubmit}>
        <input 
        type="value" 
        value={phoneNumber}
        onChange={handlePhoneNumber}
        placeholder='Enter Phone Number'/>
        <button type="submit">Submit</button>
      </form>:(<div>
        <p>Enter OTP sent to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
        </div>)}
    </div>
  )
}

export default Phonelogin
