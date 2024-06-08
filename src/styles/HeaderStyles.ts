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
        background: linear-gradient(45deg, rgba(203,33,189,1) 0%, rgba(92,30,237,1) 100%);
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
            display: flex;
            align-items: center;
            margin-left: 16px;
            color: #727272;
            line-height: 32px;

            &:hover {
                color: #1a1a1a;
            }
            
            &.active {
                font-weight: 700;
                color: #000000;
                letter-spacing: -0.024em;
            }
            
            svg {
                margin-right: 4px;
            }
        }
    }
`;

const StandAloneHeaderSection = styled.div`
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

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background: linear-gradient(45deg, rgba(203,33,189,1) 0%, rgba(92,30,237,1) 100%);
        text-align: center;
        color: #ffffff;
        font-size: 0.7rem;
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
            display: flex;
            align-items: center;
            margin-left: 16px;
            color: #727272;
            line-height: 32px;

            &:hover {
                color: #1a1a1a;
            }
            
            &.active {
                font-weight: 700;
                color: #000000;
                letter-spacing: -0.024em;
            }
            
            svg {
                margin-right: 4px;
            }
        }
    }
`;

export {
    HeaderSection,
    StandAloneHeaderSection
}
