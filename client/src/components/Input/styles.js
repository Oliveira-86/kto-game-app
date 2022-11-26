import styled from "styled-components";
import { devices } from "../../global/devices";

export const Label = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ice};
  font-weight: ${({ theme }) => theme.fonts.regular};
  margin-top: 20px;
  width: 100%;
`;

export const InputStyle = styled.input`
  padding: 5px 15px;
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  width: 100%;

  @media ${devices.mobileL} {
    font-size: 25px;
  }

  @media ${devices.tablet} {
    font-size: 25px;
  }

  @media ${devices.laptop} {
    font-size: 20px;
  }

  @media ${devices.laptopL} {
    font-size: 20px;
  }
`;


