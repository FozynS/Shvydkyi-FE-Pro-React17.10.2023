import styled from "styled-components";

const Label = styled.label`
  vertical-align: middle;
`;
const AsideItem = styled.input.attrs({ type: "checkbox" })`
  margin: 0 10px 0 10px;
`;

function Item({ theme }) {
  // const getValue = () => {
  //   console.log(theme);
  //   return theme;
  // }
  // onClick={getValue}
  return (
    <Label >
      {theme}
      <AsideItem type="checkbox" value={theme}/>
    </Label>
  );
}

export default Item;
