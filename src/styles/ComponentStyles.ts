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

export {
    ButtonPrimary,
    ButtonBackToPage,
    Loader,
}