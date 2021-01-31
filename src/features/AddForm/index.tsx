import React, { useState } from "react";
import AuthView from "./view";
import { Formik } from "formik";
import * as Yup from "yup";

function AddForm() {
  const [loading, setLoading] = useState(false);

  const yupSchema = Yup.object({
    name: Yup.string().required("Введите название банка"),
    bik: Yup.string()
      .matches(/^[0-9]{9}$/, { message: "Некорректный БИК" })
      .required("Введите БИК"),
    kor: Yup.string()
      .matches(/^(?:[\. ]*\d){20}$/, { message: "Некорректный Корсчет" })
      .required("Введите Корсчет"),
    adress: Yup.string().required("Введите адрес"),
  });

  const initialValues = {
    name: "",
    bik: "",
    kor: "",
    adress: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 10000);
      }}
      validationSchema={yupSchema}
      validateOnMount={true}
    >
      {(props) => <AuthView {...props} loading={loading} />}
    </Formik>
  );
}
export default AddForm;
