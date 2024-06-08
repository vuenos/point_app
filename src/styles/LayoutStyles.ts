import { styled, css } from "styled-components";

const MainSection = styled.main`
    display: flex;
    overflow: hidden;
    overflow-y: auto;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: calc(100vh - 96px);
    padding: 100px 24px 48px 24px;
    background-color: #ffffff;
    
    h2 {
        width: 100%;
        margin-top: 24px;
        margin-bottom: 32px;
        text-align: center;
        letter-spacing: 0.09em;
    }
`;

export {
    MainSection,
}
