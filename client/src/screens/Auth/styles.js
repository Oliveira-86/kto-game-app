import styled from "styled-components";
import { devices } from "../../global/devices";

export const Container = styled.div`
  @media ${devices.mobileS} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 20px;
  }
`;

export const ButtonContainer = styled.div`
  @media ${devices.mobileS} {
    margin-top: 40px;
    width: 100%;
    min-height: 1020;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputContainer = styled.div`
  @media ${devices.mobileS} {
    margin-top: 40px;
    width: 100%;
  }
`;

export const Title = styled.p`
  @media ${devices.mobileS} {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.ice};
    font-weight: ${({ theme }) => theme.fonts.bold};
  }
`;

export const ButtonText = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.backgroud};
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const Text = styled.p`
  @media ${devices.mobileS} {
    font-size: 12px;
    color: ${({ theme, active }) => active ? theme.colors.primary: theme.colors.ice};
    font-weight: ${({ theme }) => theme.fonts.regular};
  }
`;
