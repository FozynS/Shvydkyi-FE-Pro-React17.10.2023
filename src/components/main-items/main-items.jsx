import styled from "styled-components";

const Div = styled.div`
  width: 33%;
`
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 250px;
`;
function MainItem({ url }) {
  return (
    <Div>
      <Image src={url} />
    </Div>
  );
}

export default MainItem;
