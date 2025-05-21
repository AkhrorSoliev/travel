"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaUser, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { v4 as uuidv4 } from "uuid";

const InputField = ({
  icon: Icon,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  error,
  children,
}) => (
  <div>
    <div className="flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-2 transition focus-within:ring-2 focus-within:ring-blue-500">
      <Icon className="text-gray-500" />
      {children ? (
        children
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
        />
      )}
    </div>
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);

const TextAreaField = ({
  icon: Icon,
  placeholder,
  name,
  value,
  onChange,
  error,
}) => (
  <div>
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
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const t = useTranslations("Footer.ContactForm");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Ismingizni kiriting";
    if (!form.phone.trim()) newErrors.phone = "Telefon raqamni kiriting";
    else if (!/^\d{9}$/.test(form.phone))
      newErrors.phone = "9 xonali raqam kiriting";
    if (!form.message.trim()) newErrors.message = "Xabarni kiriting";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const fullPhone = "+998" + form.phone;
    const data = {
      id: uuidv4(),
      name: form.name,
      phone: fullPhone,
      message: form.message,
    };

    console.log(data);
    // Tozalash
    setForm({ name: "", phone: "", message: "" });
    toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
    setErrors({});
  };

  return (
    <form
      className="mx-auto mb-10 max-w-md space-y-5 p-4"
      onSubmit={handleSubmit}
    >
      <h2 className="my-5 text-center text-2xl text-white md:text-4xl">
        {t("title")}
      </h2>

      <InputField
        icon={FaUser}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={t("name")}
        error={errors.name}
      />
      <InputField
        icon={HiOutlineMail}
        name="mail"
        value={form.mail}
        onChange={handleChange}
        placeholder={t("mail")}
        error={errors.mail}
      />

      <InputField icon={FaPhone} error={errors.phone}>
        <div className="flex w-full items-center">
          <span className="mr-2 text-white select-none">+998</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(e) => {
              // Faqat raqamlar va 9 ta belgi cheklovi
              const rawValue = e.target.value.replace(/\D/g, ""); // Na raqamlarni o‘chiradi
              if (rawValue.length <= 9) {
                setForm((prev) => ({ ...prev, phone: rawValue }));
              }
            }}
            placeholder="901234567"
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={9}
          />
        </div>
      </InputField>

      <TextAreaField
        icon={FaRegCommentDots}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={t("message") + "..."}
        error={errors.message}
      />

      <button
        type="submit"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
      >
        <FaRegCommentDots />
        {t("send")}
      </button>
    </form>
  );
}

export default ContactForm;
