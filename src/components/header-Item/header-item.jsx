import styled from 'styled-components';

const Item = styled.a`
    width: 100%;
    display: flex;
    justify-content: center;
    font-weight: 700;
    padding: 20px;
    list-style: none;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
  }
    :last-child{
    margin-bottom: 0px;
  }
`

function HeaderItem ({text, bgColor}) {
  return (
    <Item 
      style={{backgroundColor: bgColor}} 
      datatype={bgColor}>{text}
    </Item>
  )
}

export default HeaderItem;