import styled from "styled-components";

export const OverflowText = styled.div<{ lines: number }>`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.lines};
  line-clamp: ${(props) => props.lines};
  -webkit-box-orient: vertical;
`;

export const MovieTitle = styled(OverflowText)`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const MovieBlockStyled = styled.div`
  height: 320px;
  border-bottom: 1px solid #b32d2d;
  display: flex;
  gap: 16px;
`;

export const MovieListStyled = styled.div`
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`;

export const YoutubeFrame = styled.iframe`
  width: 420px;
  height: 300px;
`;

export const MovieWrapper = styled.div`
  margin-top: 16px;
`;
