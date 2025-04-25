
import React, { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const renderPhoneInput = () => (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="border rounded-xl shadow-md p-6 w-full max-w-sm">
        <h1 className="text-3xl font-bold text-red-600 text-center mb-2">OVI</h1>
        <p className="text-center font-medium text-gray-700">
          One stop Solution for all your needs
        </p>
        <p className="text-center text-sm text-gray-500 mb-4">
          Enter your Mobile Number
        </p>
        <div className="flex items-center border rounded px-3 py-2 mb-4">
          <span className="text-xl">+91</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="ml-2 flex-1 outline-none"
            placeholder="Eg. 8320640123"
          />
        </div>
        <button
          onClick={() => setStep(2)}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Get OTP
        </button>
      </div>
    </div>
  );

  const renderOtpInput = () => (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <div className="border rounded-xl shadow-md p-6 w-full max-w-sm">
        <button onClick={() => setStep(1)} className="mb-4 text-gray-500">
          &larr; Back
        </button>
        <h2 className="text-xl font-semibold text-center mb-2">
          Enter verification code
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Enter the verification code sent to your mobile number
        </p>
        <div className="flex justify-between gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleOtpChange(e.target.value, index)}
              className="w-12 h-12 text-center text-xl border rounded"
            />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mb-4">
          1 min : 55 sec
        </p>
        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
          Login
        </button>
      </div>
    </div>
  );

  return step === 1 ? renderPhoneInput() : renderOtpInput();
}
