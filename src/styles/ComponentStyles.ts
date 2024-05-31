"use client";

import { styled } from "styled-components";

const ButtonPrimary = styled.button`
    display: inline-block;
    min-width: 80px;
    height: 40px;
    padding: 0 16px;
    border-radius: 8px;
    line-height: 40px;
    color: #ffffff;
    background-color: #0d6efd;
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

const Loader = styled.div`
    position: fixed;
    top: calc(50% - 60px);
    left: calc(50% - 80px);
    width: 160px;
    height: 120px;
    background-color: #ffffff;
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

export {
    ButtonPrimary,
    ButtonBackToPage,
    Loader,
    CalloutBox,
}