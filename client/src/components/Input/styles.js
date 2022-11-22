import styled from "styled-components";

export const Label = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ice};
  font-weight: ${({ theme }) => theme.fonts.regular};
  margin-top: 20px;
`;

export const InputStyle = styled.input`
  padding: 5px 15px;
  font-size: 30px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.ice};
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  width: 92%;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -22px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
  ${(props) =>
    props.third &&
    `position: absolute; 
         bottom: -20   
        `}
`;
