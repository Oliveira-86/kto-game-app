import styled from "styled-components";
import { devices } from "../../global/devices";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 885px;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 20px
  }

  @media ${devices.laptopL} {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    width: 90%;
    padding: 20px
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media ${devices.tablet} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.ice};
  font-weight: ${({ theme }) => theme.fonts.bold};
  margin-left: 8px;

  @media ${devices.tablet} {
    font-size: 36px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const ItemContainer = styled.button`
  display: flex;
  align-items: center;
  width: 93%;
  height: 60px;
  flex: 50%;
  background-color: ${({ theme }) => theme.colors.grey};
  margin-top: 10px;
  padding: 5px 3.5px;
  border-radius: 5px;
  border: none;

  @media ${devices.tablet} {
    width: 88%;
    height: 80px;
    padding: 6px 5px;
  }

  @media (min-width: 1200px) {
    width: 300px;
    height: 80px;
    padding: 6px 5px;
  }
`;

export const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.ice};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: 5px;

  @media ${devices.tablet} {
    font-size: 22px;
    margin-left: 10px;
  }
`;

export const Image = styled.img`
  width: 48px;
  height: 48px;

  @media ${devices.tablet} {
    width: 60px;
    height: 60px;
    margin-left: 10px;
  }
`;

export const List = styled.div`
  width: 100%;
  padding-left: 15px;
  display: grid;
  grid-template-columns: 50% 50%;

  @media ${devices.tablet} {
    padding-left: 45px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    padding-left: 15px;
    width: 30%;
  }
`;

export const ChartContent = styled.div`
  @media ${devices.laptopL} {
    
  }
`;

export const Subtitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.ice};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 40px;
  margin-bottom: -10px;

  @media ${devices.tablet} {
    font-size: 26px;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  margin-left: -35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Centered = styled.div`
  display: flex;
  width: 100%;
  min-height: 650px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
