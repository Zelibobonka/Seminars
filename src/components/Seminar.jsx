import styled from "styled-components";
import Button from "./Button";

const StyledSeminar = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  height: 100%;
  padding: 0.7rem;
  border: 1px solid var(--color-grey-200);
  border-radius: 0.5rem;
`;

const ImgWrap = styled.div`
  position: relative;
  display: block;
  height: 0;
  padding-bottom: 100%;
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  border-radius: var(--border-radius-md);
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 0.9rem;
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  margin-top: auto;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Seminar = ({ seminar, onEdit, onDelete }) => {
  const { title, description, date, time, photo } = seminar;

  return (
    <StyledSeminar>
      <ImgWrap>
        <Img src={photo} alt={title} width="100" />
      </ImgWrap>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BottomWrap>
        <p>
          <b>Дата проведения:</b> {date}
        </p>
        <p>
          <b>Время проведения:</b> {time}
        </p>
        <Buttons>
          <Button
            $size="small"
            $variation="secondary"
            onClick={() => onEdit(seminar)}
          >
            ✏️ Редактировать
          </Button>
          <Button
            $size="small"
            $variation="danger"
            onClick={() => onDelete(seminar)}
          >
            🗑 Удалить
          </Button>
        </Buttons>
      </BottomWrap>
    </StyledSeminar>
  );
};

export default Seminar;
