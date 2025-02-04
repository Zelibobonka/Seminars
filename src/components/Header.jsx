import { seminarsStore } from "../store/SeminarsStore";
import styled from "styled-components";
import Button from "./Button";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.2rem 2.4rem;
  width: 100%;
  max-width: 1600px;
  padding: 1.2rem;
  margin: 0 auto;
`;

function Header() {
  const { resetDatabase } = seminarsStore;

  return (
    <StyledHeader>
      <h1>Семинары</h1>
      <Button
        $size="small"
        $variation="secondary"
        onClick={() => resetDatabase()}
      >
        Сбросить данные
      </Button>
    </StyledHeader>
  );
}

export default Header;
