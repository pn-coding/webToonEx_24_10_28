import { useParams } from "react-router-dom";
import styled from "styled-components";
import { spacing } from "../GlobalStyled";
import { datas } from "../data";
import SubCon from "../components/SubCon";

const Section = styled.section`
  padding: 100px ${spacing.mainPadding};
  display: flex;
  justify-content: space-between;
`;

const Sub = () => {
  const { id } = useParams();

  return (
    <Section>
      <SubCon toonData={datas} toonId={id} />
    </Section>
  );
};

export default Sub;
