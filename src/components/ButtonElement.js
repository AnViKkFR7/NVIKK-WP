import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 0px;
  background: ${({ primary }) => (primary ? '#010606' : 'transparent')};
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: line-through;
    color: black;
    background: #fff;
  }
`;

export const ButtonHref = styled.a`
  color: ${({ hover }) => (hover ? "#010606" : "#fff")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => (dark ?  "#fff" : "#010606")};
    text-decoration: none;
  }
`;