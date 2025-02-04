import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { seminarsStore } from "../store/SeminarsStore";
import Spinner from "./Spinner";
import Seminar from "./Seminar";
import ModalWrap from "./ModalWrap";
import SeminarForm from "./SeminarForm";
import SeminarDelete from "./SeminarDelete";
import styled from "styled-components";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 479px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SeminarsList = observer(() => {
  const { fetchSeminars, seminars, isLoading } = seminarsStore;
  const [modalType, setModalType] = useState(null);
  const [selectedSeminar, setSelectedSeminar] = useState(null);
  /* Получение данных */
  useEffect(() => {
    fetchSeminars();
  }, [fetchSeminars]);

  /* Открытие модального окна */
  const openModal = (type, seminar) => {
    setModalType(type);
    setSelectedSeminar(seminar);
  };

  /* Закрытие модального окна */
  const closeModal = () => {
    setModalType(null);
    setSelectedSeminar(null);
  };

  if (seminars.length === 0 && !isLoading) return <p>Нет семинаров</p>;

  return (
    <>
      {isLoading && <Spinner />}

      <List>
        {seminars.map((seminar) => (
          <Seminar
            key={seminar.id}
            seminar={seminar}
            onEdit={() => openModal("edit", seminar)}
            onDelete={() => openModal("delete", seminar)}
          />
        ))}
      </List>

      <ModalWrap isModalOpen={modalType !== null} onCloseModal={closeModal}>
        {modalType === "edit" && (
          <SeminarForm seminar={selectedSeminar} onClose={closeModal} />
        )}
        {modalType === "delete" && (
          <SeminarDelete seminar={selectedSeminar} onClose={closeModal} />
        )}
      </ModalWrap>
    </>
  );
});

export default SeminarsList;
