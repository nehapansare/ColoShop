import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const PaymentButton = ({ price, name1, contact1, email1 }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Retrieve the logged-in user's email from localStorage
  const localemail = JSON.parse(localStorage.getItem('users'))[0].email;

  // Dynamically load the Razorpay checkout script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handles the payment process
  const handlePayment = async () => {
    setLoading(true);
    
    // Load Razorpay script and verify it loaded correctly
    const res = await loadRazorpayScript();
    if (!res) {
      toast.error('Razorpay SDK failed to load. Please try again.');
      setLoading(false);
      return;
    }

    // Retrieve checkout form data from localStorage
    const checkoutData = JSON.parse(localStorage.getItem('checkoutFormData'));
    if (!checkoutData) {
      toast.error('No checkout data found. Please try again.');
      setLoading(false);
      return;
    }

    // Configure Razorpay options
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay API key from env variables
      amount: price * 100, // Razorpay works with the smallest currency unit (paise)
      currency: "INR",
      name: "Agrimart",
      description: "Test Transaction",
      image: "https://assignment-42-emou.vercel.app/static/media/logo.313036b5e7346daaeaf3.png",
      handler: function (response) {
        // Callback function on successful payment
        toast.success('Payment Successful!');
        navigate('/bill');
      },
      prefill: {
        // Prefill payment form with user's name, email, and contact
        name: `${checkoutData.firstname || ''} ${checkoutData.lastname || ''}`,
        email: localemail,
        contact: checkoutData.phoneNumber || '',
      },
      notes: {
        // Additional notes like address details
        address: `A/P ${checkoutData.address || ''}, Flat No. ${checkoutData.apartment || ''}, City: ${checkoutData.city || ''}, State: ${checkoutData.state || ''}, Pincode: ${checkoutData.zipCode || ''}`,
      },
      theme: {
        color: "#3f5944",
      },
    };

    // Create a new Razorpay payment object and open the checkout modal
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <div>
      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#3f5944f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        {loading ? 'Loading...' : `Pay ₹${price} Now`}
      </button>
      <Toaster />
    </div>
  );
};

export default PaymentButton;
