"use client";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  FaUser,
  FaPhone,
  FaRegCommentDots,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaTimes,
} from "react-icons/fa";
import { InputField } from "./InputFiels";
import { TextAreaField } from "./TextAreaField";

export default function TourBookingModal({ tour, date, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    mail: "",
    message: "",
    tourName: tour,
    tourDate: date,
  });
  const [open, setOpen] = useState(true);
  const t = useTranslations("TourBooking");
  const [errors, setErrors] = useState({});

  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  // Обработчик нажатия ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Ismingizni kiriting";
    if (!form.phone.trim()) newErrors.phone = "Telefon raqamni kiriting";
    if (!form.tourDate.trim()) newErrors.tourDate = "Sanani kiriting";
    else if (!/^\d{9}$/.test(form.phone))
      newErrors.phone = "9 xonali raqam kiriting";
    if (!form.message.trim()) newErrors.message = "Xabarni kiriting";
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    toast.promise(
      async () => {
        try {
          // Отправка данных с новыми полями

          const text = `
                Buyurtma\n
                Tur: ${form.tourName}\n
                Sana: ${new Date(form.tourDate).toLocaleDateString()}\n
                Ism: ${form.name}\n
                Telefon: +998${form.phone}\n
                Сообщение: ${form.message}
               `;

          const botToken = "7997128244:AAHXk98iBsvMoLB-EiOzEM90eThDRRwQMA4";
          const chatId = "-1002519373404";

          const req = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
              method: "POST",
              body: JSON.stringify({
                chat_id: chatId,
                text,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            },
          );

          if (!req.ok) {
            throw new Error("Xatolik yuz berdi");
          }

          setForm({ name: "", phone: "", message: "", mail: "", date: "" });
        } catch (error) {
          console.error("Submission error:", error);
        }
      },
      {
        loading: "Xabaringiz yuborilmoqda",
        success: "Xabaringiz muvaffaqiyatli yuborildi",
        error: "Xabaringiz yuborishda xatolik yuz berdi!",
      },
    );

    setErrors({});
    handleClose();
  };

  return (
    <>
      <div
        className="modal-overlay"
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        <div className="modal-content">
          <FaTimes className="close-btn" size={24} onClick={handleClose} />

          <h2 className="mb-6 text-center text-2xl text-white">{t("title")}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField icon={FaMapMarkedAlt} error={errors.tourName}>
              <input
                type="text"
                name="tourName"
                defaultValue={form.tourName}
                disabled
                placeholder={t("tourName")}
                className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
              />
            </InputField>

            <InputField
              icon={FaCalendarAlt}
              type="date"
              name="tourDate"
              value={form.tourDate}
              onChange={(e) => setForm({ ...form, tourDate: e.target.value })}
              placeholder={t("tourDate")}
              error={errors.tourDate}
              min={new Date().toISOString().split("T")[0]}
            />

            <InputField
              icon={FaUser}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("name")}
              error={errors.name}
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
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              <FaRegCommentDots />
              {t("bookTour")}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
