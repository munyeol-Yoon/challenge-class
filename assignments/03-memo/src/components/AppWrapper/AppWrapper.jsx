import styled from "styled-components";

function AppWrapper({ children }) {
  return <StMain>{children}</StMain>;
}

export default AppWrapper;

const StMain = styled.main`
  border: 1px solid rgb(230, 230, 230);
  background-color: white;
  display: grid;
  grid-template-columns: 240px 1fr;
  width: 100%;
  height: 500px;
  max-width: 1024px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
`;
