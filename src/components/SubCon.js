import styled from "styled-components";

const Bg = styled.div`
  width: 50%;
  height: 700px;
  background: #808080 url(${(props) => props.$bgImg}) no-repeat center / cover;
`;

const Container = styled.div`
  width: 45%;
  h3 {
    font-size: 50px;
    font-weight: 700;
  }

  h5 {
    font-size: 18px;
    font-weight: 400;
    margin: 20px 0;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    li {
      color: #555;
      padding: 5px 12px;
      background-color: #dbdbdb;
      margin-right: 5px;
      border-radius: 5px;
    }
  }
`;

const SubCon = ({ toonData, toonId }) => {
  return (
    <>
      <Bg $bgImg={toonData[toonId].coverImg} />
      <Container>
        <h3>{toonData[toonId].title}</h3>
        <h5>작가명: {toonData[toonId].author}</h5>
        <p>{toonData[toonId].desc}</p>
        <ul>
          {toonData[toonId].hashTags.map((hashTag, index) => (
            <li key={index}>{hashTag}</li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default SubCon;
