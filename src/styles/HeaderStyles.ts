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

const UserDialogStyle = styled.div`
overflow: hidden;
    position: fixed;
    top: 56px;
    width: 200px;
    height: 200px;
    border: 1px solid #cecece;
    border-radius: 12px;
    background-color: #FFFFFF;
    font-size: 14px;
    -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .06);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .06);

    .user-info-wrap {
        display: flex;
        flex-direction: column;
        height: 100%;

        .info-list {
            padding: 16px 16px 8px 16px;

            li {
                margin-top: 8px;
                color: #727272;
            }
        }

        .foot {
            margin-top: auto;
            padding: 8px 8px;
            text-align: right;
            background-color: #f9f9f9;

            button {
                border: 1px solid #cecece;
                border-radius: 8px;
                padding: 4px 8px;
                background-color: #FFFFFF;
                font-size: 12px;
                color: #727272;

                svg {
                    vertical-align: middle;
                }

                &:hover {
                    color: #000000;
                }
            }
        }
    }
`;

export {
    HeaderSection,
    StandAloneHeaderSection,
    UserDialogStyle
}
