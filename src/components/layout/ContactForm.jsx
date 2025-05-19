"use client";
import React, { useState } from "react";
import { FaUser, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const InputField = ({
  icon: Icon,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => (
  <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-2 transition focus-within:ring-2 focus-within:ring-blue-500">
    <Icon className="text-gray-500" />
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
    />
  </div>
);

const TextAreaField = ({ icon: Icon, placeholder, name, value, onChange }) => (
  <div className="flex items-start gap-3 rounded-xl border border-gray-300 px-4 py-2 transition focus-within:ring-2 focus-within:ring-blue-500">
    <Icon className="mt-1 text-gray-500" />
    <textarea
      rows={4}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full resize-none bg-transparent text-white placeholder-gray-400 outline-none"
    />
  </div>
);

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      ...form,
    };
    console.log(data);
    // You can handle the data object as needed here
  };

  return (
    <form
      className="mx-auto mb-10 max-w-md space-y-5 p-4"
      onSubmit={handleSubmit}
    >
      <h2 className="my-5 text-center text-2xl text-white md:my-10 md:text-4xl">
        Buyurtma bering
      </h2>
      <InputField
        icon={FaUser}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Ismingizni kiriting"
      />
      <InputField
        icon={FaPhone}
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Telefon raqamingiz"
      />
      <TextAreaField
        icon={FaRegCommentDots}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Xabaringizni yozing..."
      />
      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        <FaRegCommentDots />
        Jo'natish
      </button>
    </form>
  );
}

export default ContactForm;
