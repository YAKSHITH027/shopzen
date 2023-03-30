/*import { useCallback } from "react";
import useRazorpay from "react-razorpay";

function Checkout  () {
    const Razorpay = useRazorpay();

    const handlePayment = useCallback( async () => {
  
      const options={
        key:"",        
        amount: "300000",
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzpay = new Razorpay(options);
      rzpay.open();
    }, [Razorpay]);
  
    return (
        <>
            <h1>Checkout</h1>
            <button onClick={handlePayment}>Pay Now</button>
        </>
    )
}

export default Checkout*/