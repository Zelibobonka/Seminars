import styled from "styled-components";
import { seminarsStore } from "../store/SeminarsStore";
import Button from "./Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 1.7rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 10px;
`;

const SeminarDelete = ({ seminar, onClose }) => {
  const { deleteSeminar } = seminarsStore;

  return (
    <Wrapper>
      <Title>Удалить семинар?</Title>
      <Buttons>
        <Button
          $size="small"
          $variation="danger"
          onClick={() => {
            deleteSeminar(seminar.id);
            onClose();
          }}
        >
          🗑 Удалить
        </Button>
        <Button $size="small" $variation="secondary" onClick={onClose}>
          ❌ Отмена
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export default SeminarDelete;
