"use client"
import { styled } from "styled-components";

const HomeSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;

    button {
        margin: 0 auto;
    }
    
    .server-status {
        width: 100%;
        text-align: center;
        margin-top: 40px;
        
        .status-msg {
            font-size: 20px;
        }
        
        .user-data {
            margin-top: 40px;
            
            li {
                line-height: 1.6;
            }
        }
    }
`;

export {
    HomeSection
}