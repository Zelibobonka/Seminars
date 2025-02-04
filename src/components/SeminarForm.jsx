import { useForm } from "react-hook-form";
import { seminarsStore } from "../store/SeminarsStore";
import styled from "styled-components";
import Button from "./Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100vw - 40px);
  max-width: 40rem;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const InputTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 10px;
`;

const SeminarForm = ({ seminar, onClose }) => {
  const { register, handleSubmit } = useForm({
    /* Подставление данных семинара в форму */
    defaultValues: {
      ...seminar,
      date: seminar.date
        .split(".")
        .reverse()
        .join("-") /* Изменение формата даты */,
    },
  });
  const { updateSeminar } = seminarsStore;
  const onSubmit = (data) => {
    updateSeminar(seminar.id, {
      ...data,
      date: data.date
        .split("-")
        .reverse()
        .join(".") /* Изменение формата даты */,
    });
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputWrap>
        <InputTitle>Название семинара:</InputTitle>
        <input
          {...register("title", { required: true })}
          placeholder="Название"
        />
      </InputWrap>
      <InputWrap>
        <InputTitle>Описание семинара:</InputTitle>
        <textarea
          {...register("description", { required: true })}
          placeholder="Описание"
        />
      </InputWrap>
      <InputWrap>
        <InputTitle>Дата проведения:</InputTitle>
        <input type="date" {...register("date", { required: true })} />
      </InputWrap>
      <InputWrap>
        <InputTitle>Время проведения:</InputTitle>
        <input type="time" {...register("time", { required: true })} />
      </InputWrap>
      <InputWrap>
        <InputTitle>Ссылка на фото:</InputTitle>
        <input type="text" {...register("photo")} placeholder="URL фото" />
      </InputWrap>

      <Buttons>
        <Button $size="small" $variation="primary" type="submit">
          ✅ Сохранить
        </Button>
        <Button
          $size="small"
          $variation="secondary"
          type="button"
          onClick={onClose}
        >
          ❌ Закрыть
        </Button>
      </Buttons>
    </Form>
  );
};

export default SeminarForm;
