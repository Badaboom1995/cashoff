import React from "react";
import AddFormView from "./view";
import { Formik } from "formik";
import * as Yup from "yup";

interface IAddForm {
  handleSubmit: (props: any) => void;
  initialValues?: {
    name: string;
    bik: string;
    kor: string;
    adress: string;
  };
}

function AddForm({ handleSubmit, initialValues }: IAddForm) {
  const yupSchema = Yup.object({
    name: Yup.string().required("Введите название банка"),
    bik: Yup.string()
      .matches(/^[0-9]{9}$/, { message: "Некорректный БИК" })
      .required("Введите БИК"),
    kor: Yup.string()
      .matches(/^(?:[. ]*\d){20}$/, { message: "Некорректный Корсчет" })
      .required("Введите Корсчет"),
    adress: Yup.string().required("Введите адрес"),
  });

  const defaultValues = {
    name: "",
    bik: "",
    kor: "",
    adress: "",
  };

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        // actions.resetForm();
      }}
      validationSchema={yupSchema}
      validateOnMount={true}
    >
      {(props) => <AddFormView {...props} />}
    </Formik>
  );
}
export default AddForm;
