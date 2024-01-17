import React, { useEffect,useState,useRef } from 'react'

const OtpInput = ({length=4,onOtpSubmit=()=>{}}) => {
    const [otp, setotp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() =>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[])


    // console.log(otp);

    const handleChange =(index,e) =>{
        const value = e.target.value;
        if(isNaN(value)) return;

        const newOtp = [...otp];
        //allow only one input
        newOtp[index] = value.substring(value.length-1);
        setotp(newOtp);

        //submit trigger
        const combinedOtp = new Otp.join("");
        if(combinedOtp.length === length) onOtpSubmit(combinedOtp);
        
        // Move to next input if current field is filled
        if(value && index<length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }
    }

    const handleClick =(index) =>{
        inputRefs.current[index].setSelectionRange(1,1);

        //optional
        if(index>0 && !otp[input-1]){
            inputRefs.current[otp.indexOf("").focus()]
        }
    }

    const handleKeyDown = () => {
        if(e.key==="Backspace" && !otp[input] && index>0 && inputRefs.current[index-1]){
            inputRefs.current[index-1].focus();
        }
    };

  return (
    <div>
        {
            otp.map((value,index) => {
                return(
                    <input 
                    key={index}
                    type="text"
                    ref = {(input)=> (inputRefs.current[index] = input)}
                    value={value}
                    onChange={(e) => handleChange(index,e)}
                    onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index,e)}
                    className="otpInput"
                    />
                );
            })}
    </div>
  );
}

export default OtpInput;
