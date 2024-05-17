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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        background-color: #000;
        text-align: center;
        color: #ffffff;
        border-radius: 100%;

        a {
            color: #ffffff;
        }
    }

    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 16px;

        a {
            display: inline-block;
            margin-left: 24px;
            color: #727272;
            line-height: 24px;

            &:hover {
                color: #333333;
                border-bottom: 1px solid #727272;
            }
        }
    }
`;

export {
    HeaderSection
}