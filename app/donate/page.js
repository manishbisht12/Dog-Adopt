"use client";

import { useState } from "react";
import { SiPhonepe } from "react-icons/si";
import { FaGooglePay, FaCcMastercard } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DonatePage() {
  const [selected, setSelected] = useState(null); // "card", "googlepay", "phonepe"

  const openAppOrWebsite = (appUrlScheme, webUrl) => {
    const timeout = setTimeout(() => {
      window.open(webUrl, "_blank");
    }, 2000);

    window.location.href = appUrlScheme;

    window.addEventListener("blur", () => {
      clearTimeout(timeout); // User left page, app opened
    });
  };

  const handlePaymentOption = (option) => {
    setSelected(option);

    if (option === "googlepay") {
      // Try open Google Pay app, fallback to website
      openAppOrWebsite(
        "com.google.android.apps.nbu.paisa.user://upi/pay", // Google Pay app URI
        "https://pay.google.com"
      );
    } else if (option === "phonepe") {
      // Try open PhonePe app, fallback to website
      openAppOrWebsite(
        "phonepe://pay", // PhonePe app URI
        "https://www.phonepe.com"
      );
    }
  };

  const handleCardPayment = (e) => {
    e.preventDefault();

    toast.success("Payment Successful! Thank you for donating ");
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12 relative">
      <ToastContainer
        position="top-right"
        style={{ marginTop: "80px" }}
        autoClose={3000}
      />

      <div className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow-md border border-teal-600">
        <h1 className="text-2xl font-bold text-teal-400 mb-6 text-center mb-10">
          Donate
        </h1>

        <div className="flex justify-around mb-6">
          <button
            onClick={() => handlePaymentOption("googlepay")}
            className="flex flex-col items-center gap-2 cursor-pointer transition-colors hover:text-[#4285F4]"
          >
            <FaGooglePay className="text-5xl" />
            <span className="text-sm text-gray-300">Google Pay</span>
          </button>

          <button
            onClick={() => handlePaymentOption("phonepe")}
            className="flex flex-col items-center gap-2 cursor-pointer transition-colors hover:text-[#5f259f]"
          >
            <SiPhonepe className="text-5xl" />
            <span className="text-sm text-gray-300">PhonePe</span>
          </button>

          <button
            onClick={() => setSelected("card")}
            className="flex flex-col items-center gap-2 cursor-pointer transition-colors hover:text-[#EB001B]"
          >
            <FaCcMastercard className="text-5xl" />
            <span className="text-sm text-gray-300">Card</span>
          </button>
        </div>

        {selected === "card" && (
          <form className="space-y-4" onSubmit={handleCardPayment}>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
              required
            />
            <input
              type="text"
              placeholder="Expiry MM/YY"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
              required
            />
            <input
              type="password"
              placeholder="CVV"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
            >
              Pay with Card
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
