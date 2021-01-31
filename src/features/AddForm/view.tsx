import React from "react";
import Input from "../../components/Input";
import { Wrapper, Form, Fields, FormTitle } from "./styled";
import Button from "../../components/Button";

function AddFormView(props: any) {
  return (
    <Wrapper>
      <Form onSubmit={props.handleSubmit}>
        <FormTitle>Create a new account</FormTitle>
        <Fields>
          <Input
            name="name"
            title="Название"
            error={props.errors.email}
            touched={!!props.touched.email}
          />
          <Input
            name="bik"
            title="БИК"
            error={props.errors.name}
            touched={!!props.touched.name}
          />
          <Input
            name="korr"
            title="Коррсчет"
            password
            error={props.errors.password}
            touched={!!props.touched.password}
          />
          <Input
            name="adress"
            title="Адрес"
            password
            error={props.errors.password}
            touched={!!props.touched.password}
          />
        </Fields>
        <Button disabled={!props.isValid} type="submit" loading={props.loading}>
          Sign up
        </Button>
      </Form>
    </Wrapper>
  );
}
export default AddFormView;
