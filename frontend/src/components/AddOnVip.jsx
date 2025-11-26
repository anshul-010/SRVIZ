import { CheckCircle, Star, Loader2 } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";

export const AddOnVip = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      errors.phone = "Phone number is invalid";
    }

    if (!formData.message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    const errors = validateForm();
    setSuccessMsg("");
    setErrorMsg("");

    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(
        "https://srviz-1.onrender.com/api/contact",
        formData
      );

      setSuccessMsg("Thank you! We’ll contact you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setErrorMsg(
        error?.response?.data?.message ||
          "Something went wrong. Please try again!"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="enquiries" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12">ADD-ONS & VIP EXPERIENCES</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="row-span-2 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527933053326-89d1746b76b9?w=600"
                  className="w-full h-full object-cover hover:scale-105 transition cursor-pointer"
                />
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300"
                  className="w-full h-full object-cover hover:scale-105 transition cursor-pointer"
                />
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300"
                  className="w-full h-full object-cover hover:scale-105 transition cursor-pointer"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Premium VIP Package</h3>

              <p className="text-gray-600 mb-4">
                Elevate your sports travel experience with our exclusive VIP
                packages...
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-20">
              <h3 className="text-2xl font-bold mb-2">CONTACT</h3>
              <p className="text-gray-600 mb-6">
                Get in touch for personalized packages
              </p>

              <div className="space-y-4">
                <InputField
                  label="Name"
                  name="name"
                  value={formData.name}
                  error={formErrors.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />

                <InputField
                  label="Email"
                  name="email"
                  value={formData.email}
                  error={formErrors.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />

                <InputField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  error={formErrors.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                />

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Tell us about your requirements..."
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    } bg-gray-50 focus:ring-2 focus:ring-orange-500`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md flex justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </button>

                {successMsg && (
                  <p className="text-green-600 text-sm flex items-center justify-center">
                    <CheckCircle size={16} className="mr-2" /> {successMsg}
                  </p>
                )}

                {errorMsg && (
                  <p className="text-red-600 text-sm text-center">{errorMsg}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InputField = ({ label, name, value, error, onChange, placeholder }) => (
  <div>
    <label className="block text-sm font-semibold mb-2 text-gray-700">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-lg border ${
        error ? "border-red-500" : "border-gray-300"
      } bg-gray-50 focus:ring-2 focus:ring-orange-500`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
