import styled from "styled-components";
import { devices } from "../../global/devices";

export const StyledButton = styled.button`
  display: flex;
  position: relative;
  padding: ${({ large }) => (large ? "15px" : "10px")};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  width: 100%;
  height: 50px;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  ${(props) => props.small && `height: 36px;`}
  ${(props) => {
    switch (props.variant) {
      case "disabled":
        return `
                    background-color: ${props.theme.colors.gray};
                    border: 1px solid transparent;
                `;
      case "outlined":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 1px solid ${props.theme.colors.white}
                `;
      case "outlinedSecondary":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 1px solid ${props.theme.colors.secondary}
                `;
      case "outlinedPrimary":
        return `
                    background-color: ${props.theme.colors.background};
                    border: 0.85px solid ${props.theme.colors.primary};
                    opacity: 0.3;
                `;
      default:
        return `
                    background-color: ${props.theme.colors.primary};
                    border: 1px solid ${props.theme.colors.primary};
                `;
    }
  }};

  @media ${devices.tablet} {
    height: 45px;
  }

  @media ${devices.laptop} {
    height: 40px;
  }
`;

export const ButtonText = styled.p`
  font-size: 13px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-transform: uppercase;
  ${(props) => props.small && `font-size: 8px; margin-left: 30px;`}
  ${(props) => {
    switch (props.variant) {
      case "white-secondary":
        return `color: ${props.theme.colors.secondary}`;
      case "outlinedSecondary":
        return `color: ${props.theme.colors.secondary}`;
      case "outlinedPrimary":
        return `color: ${props.theme.colors.primary}; opacity: 1`;
      default:
        return `color: ${props.theme.colors.white}`;
    }
  }};
`;
