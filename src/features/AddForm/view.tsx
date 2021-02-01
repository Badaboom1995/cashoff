import React from "react";
import Input from "../../components/Input";
import { Wrapper, Form, Fields, FormTitle } from "./styled";
import { Card } from "../../components/styled";
import Button from "../../components/Button";

function AddFormView(props: any) {
  return (
    <Wrapper>
      <Card>
        <Form onSubmit={props.handleSubmit}>
          <FormTitle>{props.edit ? "Изменить" : "Добавить"} банк</FormTitle>
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
              error={props.errors.adress}
              touched={!!props.touched.adress}
            />
          </Fields>
          <Button
            disabled={!props.isValid}
            type="submit"
            loading={props.loading}
          >
            Готово
          </Button>
        </Form>
      </Card>
    </Wrapper>
  );
}
export default AddFormView;
