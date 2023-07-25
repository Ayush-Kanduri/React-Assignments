import "./styles.css";
import styled from "styled-components";

const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: fit-content;
`;

const ContainerRow = styled.div`
  display: flex;
  flex: 1;
`;

const Box = styled.div`
  width: 70px;
  height: 70px;
  border: 2px solid red;
  display: flex;
`;

export default function App() {
  return (
    <div>
      <ContainerColumn>
        <ContainerRow>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </ContainerRow>
        <ContainerRow>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </ContainerRow>
        <ContainerRow>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </ContainerRow>
      </ContainerColumn>
    </div>
  );
}
