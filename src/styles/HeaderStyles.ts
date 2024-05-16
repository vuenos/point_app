import { styled } from "styled-components";

const HeaderSection = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;;
    height: 76px;
    padding: 0 24px;
    background-color: hsla(0, 0%, 100%, .95);
    -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .06);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .06);

    h1 {
        line-height: 76px;
    }
`;

export {
    HeaderSection
}