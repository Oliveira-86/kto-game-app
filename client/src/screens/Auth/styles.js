import styled from "styled-components";
import { devices } from "../../global/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;

  @media ${devices.tablet} {
    padding: 20px 30px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  min-height: 1020;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${devices.tablet} {
    width: 90%;
  }

  @media ${devices.laptop} {
    margin-left: 5%;
  }
`;

export const InputContainer = styled.div`
  margin-top: 40px;
  width: 100%;
  @media ${devices.tablet} {
    width: 90%;
  }

  @media ${devices.laptop} {
    margin-left: 5%;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.ice};
  font-weight: ${({ theme }) => theme.fonts.bold};
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
  font-size: 12px;
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.ice};
  font-weight: ${({ theme }) => theme.fonts.regular};
`;

export const Centered = styled.div`
  width: 100%;
  height: 100%;

  @media ${devices.laptop} {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 15px;
    align-items: center;
    width: 60%;
    justify-content: center;
  }

  @media ${devices.laptopL} {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 30%;
    padding: 20px
  }
`;
