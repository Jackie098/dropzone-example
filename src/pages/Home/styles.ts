import styled from "styled-components";

export const Container = styled.div`
  background: var(--background-color-blue);
  /* width: 100%; */
  min-height: 750px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  height: 85px;
  background: var(--title-color);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 50px;
  font-weight: bold;
  color: var(--text-color-blue);
  border-bottom: 3px solid var(--primary-color);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AreaDropzone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 100px;

  background: var(--container-color);
  width: 800px;

  /* div {
    background: var(--container-color);
    height: 200px;
    width: 600px;
  } */
`;
