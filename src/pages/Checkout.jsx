// import { useState } from "react";

// function Checkout() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     alert("Order Placed Successfully 🎉");
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6">

//       <h1 className="text-3xl font-bold mb-6">
//         Delivery Details
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="space-y-4"
//       >
//         <input
//           type="text"
//           placeholder="Full Name"
//           className="border p-3 w-full rounded"
//           value={formData.name}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               name: e.target.value,
//             })
//           }
//         />

//         <input
//           type="text"
//           placeholder="Phone Number"
//           className="border p-3 w-full rounded"
//           value={formData.phone}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               phone: e.target.value,
//             })
//           }
//         />

//         <textarea
//           placeholder="Delivery Address"
//           className="border p-3 w-full rounded"
//           value={formData.address}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               address: e.target.value,
//             })
//           }
//         />

//         <button
//           type="submit"
//           className="bg-orange-500 text-white px-6 py-3 rounded"
//         >
//           Place Order
//         </button>
//       </form>

//     </div>
//   );
// }

// export default Checkout;


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "COD",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill all fields");
      return;
    }

    navigate("/success");
  };

  return (
    <div className="max-w-xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Delivery Details
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Full Name"
          className="border p-3 w-full rounded"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border p-3 w-full rounded"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Delivery Address"
          className="border p-3 w-full rounded"
          rows="4"
          value={formData.address}
          onChange={(e) =>
            setFormData({
              ...formData,
              address: e.target.value,
            })
          }
        />

        <div>
          <h2 className="text-xl font-bold mb-3">
            Payment Method
          </h2>

          <div className="flex flex-col gap-3">

            <label>
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={formData.payment === "COD"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    payment: e.target.value,
                  })
                }
              />
              <span className="ml-2">
                Cash On Delivery
              </span>
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="UPI"
                checked={formData.payment === "UPI"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    payment: e.target.value,
                  })
                }
              />
              <span className="ml-2">UPI</span>
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="Card"
                checked={formData.payment === "Card"}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    payment: e.target.value,
                  })
                }
              />
              <span className="ml-2">
                Debit / Credit Card
              </span>
            </label>

          </div>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-3 rounded hover:bg-orange-600"
        >
          Place Order
        </button>

      </form>

    </div>
  );
}

export default Checkout;