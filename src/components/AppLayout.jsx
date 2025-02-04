import styled from "styled-components";
import SeminarsList from "./SeminarsList";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  position: relative;
  background-color: var(--color-grey-50);
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1.2rem 1.2rem 2rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container>
          <SeminarsList />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
