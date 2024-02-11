import HeaderItem from "../header-Item/header-item";
import styled from "styled-components";

const menuItems = [
  {
    text: "home",
    bgColor: "#1abc9c",
    id: 1,
  },
  {
    text: "products",
    bgColor: "#e74c3c",
    id: 2,
  },
  {
    text: "about",
    bgColor: "#3498db",
    id: 3,
  },
  {
    text: "portfolio",
    bgColor: "#9b59b6",
    id: 4,
  },
  {
    text: "contact us",
    bgColor: "#e67e22",
    id: 5,
  },
];

const List = styled.header`
  display: flex;
`;

function Header() {
  return (
    <List>
      {menuItems.map((item) => (
        <HeaderItem key={item.id} text={item.text} bgColor={item.bgColor} />
      ))}
    </List>
  );
}

export default Header;
