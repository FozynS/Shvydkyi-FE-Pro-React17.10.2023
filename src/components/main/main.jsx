import styled from "styled-components";
import MainItem from "../main-items/main-items";
import { useState, useEffect } from "react";

const MainSection = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
`;

const request = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Запрос завершился нуедачеуй");
    } else {
      return res.json();
    }
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
  }
};

function Main() {
  const [itemUrl, setItemUrl] = useState([]);

  useEffect(() => {
    request("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => {
        setItemUrl(res);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  }, []);

  return (
    <MainSection>
      {itemUrl.map((item) => (
        <MainItem key={item.id} url={item.url} />
      ))}
    </MainSection>
  );
}

export default Main;
