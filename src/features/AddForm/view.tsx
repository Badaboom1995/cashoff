import React from "react";
import Input from "../../components/Input";
import { Wrapper, Form, Fields, FormTitle } from "./styled";
import Button from "../../components/Button";

function AddFormView(props: any) {
  return (
    <Wrapper>
      <Form onSubmit={props.handleSubmit}>
        <FormTitle>Добавить банк</FormTitle>
        <Fields>
          <Input
            name="name"
            title="Название"
            error={props.errors.name}
            touched={!!props.touched.name}
          />
          <Input
            name="bik"
            title="БИК"
            error={props.errors.bik}
            touched={!!props.touched.bik}
          />
          <Input
            name="kor"
            title="Коррсчет"
            error={props.errors.kor}
            touched={!!props.touched.kor}
          />
          <Input
            name="adress"
            title="Адрес"
            password
            error={props.errors.adress}
            touched={!!props.touched.adress}
          />
        </Fields>
        <Button disabled={!props.isValid} type="submit" loading={props.loading}>
          Добавить
        </Button>
      </Form>
    </Wrapper>
  );
}
export default AddFormView;
