import * as Yup from "yup";

export const reservationScheme = Yup.object({
  fullName: Yup.string()
    .required("Bu alan boş olamaz.")
    .min(3, "En az 3 karakter olmalı."),
  phoneNumber: Yup.string()
    .required("Bu alan boş olamaz.")
    .min(10, "En az 10 karakter olmalı."),
  email: Yup.string()
    .required("Bu alan boş olamaz.")
    .email("Geçersiz eMail adresi."),
  persons: Yup.string().required("Bu alan boş olamaz."),
  date: Yup.string().required("Bu alan boş olamaz."),
});
