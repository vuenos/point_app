"use client";

import {keyframes, styled} from "styled-components";
import {string} from "prop-types";

const ButtonPrimary = styled.button`
    display: inline-block;
    min-width: 80px;
    height: 40px;
    padding: 0 16px;
    border-radius: 8px;
    line-height: 40px;
    color: #ffffff;
    background: linear-gradient(45deg, rgba(203, 33, 189, 1) 0%, rgba(92, 30, 237, 1) 100%);
`;

const ButtonBackToPage = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 80px;
    height: 40px;
    padding: 0 16px 0 16px;
    border-radius: 8px;
    line-height: 40px;
    color: #727277;
    background-color: #f1f1f1;

    &:hover {
        color: #000000;
        transition: all 0.3s;
    }

    svg {
        margin-right: 4px;
    }
`;

const OAuthCallButton = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid #cecece;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 20px;
    color: #727272;

    svg {
        color: #000;
    }

    &:hover svg {
        color: #999;
        transition: all 0.3s;
    }
`;

const UserNameButton = styled.button`
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 32px;
    height: 32px;
    border: 1px solid #cecece;
    border-radius: 100%;
    margin-left: 16px;
    font-size: 13px;
    letter-spacing: -0.064em;
    color: #FFFFFF !important;
    font-weight: 700;
    background: linear-gradient(45deg, rgb(65 155 210) 0%, rgb(239 117 94) 100%);

    &:hover {
        opacity: 0.8;
        transition: all 0.3s;
    }

    span {
        text-transform: uppercase;
    }
`;

const LogoutButton = styled.button`
    display: inline-block;
    width: 64px;
    height: 32px;
    border: 1px solid #cecece;
    border-radius: 8px;
    margin-left: 16px;
    padding: 0 4px;
    font-size: 12px;
    letter-spacing: 0;
    color: #000000 !important;
    font-weight: 700;

    &:hover {
        opacity: 0.6;
        transition: all 0.3s;
    }
`;

const Loader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    border-color: #cccccc;
    color: #727272;
`;

const CalloutBox = styled.div`
    width: 100%;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: none;
    font-family: Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    margin-bottom: 16px;
    padding: 6px 16px;
    color: rgb(1, 67, 97);
    background-color: rgb(229, 246, 253);

    .title {
        margin: -2px 0px 0.35em;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        font-weight: 700;
    }

    &.error {
        color: rgb(95, 33, 32);
        background-color: rgb(253, 237, 237);
    }
`;

const InputPasswordShow = styled.button`
    width: 32px;
    height: 32px;

    &:hover {

    }
`;

const HorizontalRule = styled.hr`
    margin: 24px 0;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const LinkStyle = styled.a.attrs<{ $scroll?: {} }>(props => ({
  $scroll: props.$scroll || `{false}`
}))`
    color: #1724a3;
    text-decoration: underline;

    &:link {
        text-decoration: underline;
    }
`;

const loadingAnimation = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

const CardList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    max-width: 640px;
    margin: 40px auto 0 auto;

    li {
        flex: 0 1 160px;
        width: 160px;
        height: 240px;
        border: 1px solid #ccc;
        border-radius: 12px;
        padding: 16px;
        word-break: break-all;
        font-size: 14px;
        color: #727272;
        letter-spacing: -0.064em;

        * {
            letter-spacing: -0.044em;
        }

        .user-id {
            font-size: 11px;
            color: #cdcdcd;
        }
    }
`;

const SkeletonSpan = styled.span<{ width: string, height: string, margin: string, borderRadius?: string }>`
    display: block;
    background: linear-gradient(90deg, #DADADA, #f5f5f5, #DADADA);
    background-size: 200% 100%;
    animation: ${loadingAnimation} 1.5s infinite;
    width: ${props => props.width};
    height: ${props => props.height};
    margin: ${props => props.margin};
    border-radius: ${props => props.borderRadius ? props.borderRadius : "8px"};
`;

export {
  ButtonPrimary,
  ButtonBackToPage,
  OAuthCallButton,
  UserNameButton,
  LogoutButton,
  Loader,
  CalloutBox,
  InputPasswordShow,
  HorizontalRule,
  LinkStyle,
  SkeletonSpan,
  CardList,
}
