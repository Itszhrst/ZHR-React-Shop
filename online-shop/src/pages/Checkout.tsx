import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

type CheckoutForm = {
  name: string;
  email: string;
  address: string;
};


const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  address: yup.string().required("Address is required"),
});

export default function Checkout() {
  const { state } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<CheckoutForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CheckoutForm) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log("Form Data:", data);
        console.log("Cart Items:", state.items);

        resolve();
        reset();
      }, 1000);
    });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {isSubmitSuccessful && (
        <p className="success">Your order has been placed successfully</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input {...register("name")} placeholder="Enter your full name" />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input {...register("email")} placeholder="Enter your email" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea {...register("address")} placeholder="Enter your address" />
          {errors.address && <p className="error">{errors.address.message}</p>}
        </div>

        <button disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? "Processing..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}
