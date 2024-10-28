import styled from "styled-components";
import { spacing } from "../GlobalStyled";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  padding: 20px ${spacing.mainPadding};
  border-bottom: 1px solid #dbdbdb;
`;

const Header = () => {
  return (
    <SHeader>
      <h3>
        <Link to={"/"}>WEB TOON</Link>
      </h3>
    </SHeader>
  );
};

export default Header;
