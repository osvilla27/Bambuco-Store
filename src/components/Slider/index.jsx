import styled from "styled-components";
import { useState } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { Container, Section } from "globalStyles";

const children = [
  {
    image:
      "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    caption: "Nemichi-Jinja, Seki",
  },
  {
    image:
      "https://images.pexels.com/photos/52961/antelope-nature-flowers-meadow-52961.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    caption: "Itsukushima Shrine",
  },
  {
    image:
      "https://us.123rf.com/450wm/aprillrain/aprillrain2209/aprillrain220900194/191556087-imagen-abstracta-de-los-cielos-abiertos-el-camino-el-camino-al-cielo-ilustraci%C3%B3n-de-alta-calidad.jpg?ver=6",
    caption: "Nueva imagen",
  },
];

const SliderWrapper = styled(Section)`
  margin-top: 80px;
`;

const ImageBox = styled(Container)`
  width: 100%;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.white};
`;

const Slider = () => {
  const [{ items, activeIndex }, setState] = useState({
    items: children,
    activeIndex: 0,
  });

  const moveTo = (newIndex) => () => {
    if (newIndex === -1) {
      setState((s) => ({ ...s, activeIndex: items.length - 1 }));
      return;
    }
    if (newIndex === items.length) {
      setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  const ThumbnailList = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    height: 15%;
    margin-bottom: 20px;
  `;

  const Thumbnail = styled.div`
    cursor: pointer;
    opacity: ${({ active }) => (active ? 1 : 0.6)};
    background-color: black;
    width: 20px;
    height: 5px;
    border-radius: 3px;
    margin: 5px;

    :hover {
      opacity: 1;
    }
  `;

  return (
    <SliderWrapper>
      <ImageBox>
        <img alt={items[activeIndex].caption} src={items[activeIndex].image} />
        <ContainerButton>
          <AiFillCaretLeft onClick={moveTo(activeIndex - 1)} size="20px" />
          <AiFillCaretRight onClick={moveTo(activeIndex + 1)} size="20px" />
        </ContainerButton>

        <ThumbnailList>
          {items.map((item, index) => (
            <Thumbnail active={activeIndex === index} src={item.image} />
          ))}
        </ThumbnailList>
      </ImageBox>
    </SliderWrapper>
  );
};

export default Slider;
