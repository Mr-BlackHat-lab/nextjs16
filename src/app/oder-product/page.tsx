"use client";
import { useRouter } from "next/navigation";
export default function OrderProductPage() {
  const router = useRouter();
  const handleclick = () => {
    router.replace("/");
    alert("Order placed successfully!");
    console.log("Order placed successfully!");
  };
  return (
    <>
      <div>
        <h1>Order Product Page</h1>
        <p>This is the order product page.</p>
        <p>Here you can order products.</p>
      </div>

      <button onClick={handleclick}>Place Order</button>
    </>
  );
}
