import { useEffect, useState } from "react";

function Tracking() {
  const [status, setStatus] =
    useState("Preparing 🍳");

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStatus("Packed 📦");
    }, 5000);

    const timer2 = setTimeout(() => {
      setStatus("Out For Delivery 🛵");
    }, 10000);

    const timer3 = setTimeout(() => {
      setStatus("Delivered ✅");
    }, 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="text-center py-20">

      <h1 className="text-5xl font-bold">
        Order Tracking
      </h1>

      <h2 className="text-3xl mt-10 text-orange-500">
        {status}
      </h2>

    </div>
  );
}

export default Tracking;