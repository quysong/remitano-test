import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  margin: 0 auto;
  border: 1px solid #b32d2d;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  padding: 24px;
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  margin-top: 16px;
  width: 200px;
`;
