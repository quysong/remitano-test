import styled from "styled-components";

export const AnimatedLoading = styled.div<{ height: number, width: number }>`
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  width: ${(props) => props.width? `${props.width}px` : `1px`};
  height: ${(props) => props.height? `${props.height}px` : `1px`};
`;
