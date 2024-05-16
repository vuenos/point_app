import { styled } from "styled-components";

const FooterSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 96px;
    padding: 24px;
    background-color: #f9fafb;

    .small-bi {
        flex: 0 1 40%;

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: #000;
            text-align: center;
            color: #ffffff;
            font-size: 12px;
            border-radius: 100%;
            color: #ffffff;
        }
    }

    .copy {
        color: #999;
    }

    nav {
        flex: 0 1 40%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a {
            margin-left: 24px;
            color: #333;
            font-weight: 700;
        }
    }
`;

export {
    FooterSection
}