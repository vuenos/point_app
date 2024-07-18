import {styled} from "styled-components";
import {ButtonPrimary, InputPasswordShow} from "@/styles/ComponentStyles";
import {LinkStyle, OAuthCallButton} from "@/styles/ComponentStyles";

const InputTypeText = styled.input`
    display: block;
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) => props.readOnly ? "#eaebec" : "rgba(203,33,189,1)"};
    border-radius: 8px;
    color: ${(props) => props.readOnly ? "#bababa" : "#727272"};
    background-color: #ffffff;

    &::placeholder {
        color: #dadada;
    }
`;


const InputWithOption = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;

    ${InputPasswordShow} {
        height: 48px;
    }
`;

const InputWithLabel = styled.div`
    width: 100%;
    margin-top: 24px;

    label {
        display: block;
        padding-bottom: 8px;
        padding-left: 4px;
        font-size: 14px;
        color: rgba(92, 30, 237, 1);
    }

    ${InputTypeText} {
        height: 48px;
    }
`;

const FormSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 24px;

    fieldset {
        width: 480px;
        border: 1px solid rgba(203,33,189,1);
        margin-bottom: 16px;
        border-radius: 8px;
        padding: 24px 40px;

        legend {
            width: 200px;
            margin: 0 auto;
            text-align: center;
            font-size: 1.4em;
            font-weight: 700;
            color: #000;
        }
    }

    ${ButtonPrimary} {
        width: 100%;
        height: 48px;
        margin-top: 40px;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.064em;

        &:hover {
            background: linear-gradient(45deg, rgba(92, 30, 237, 1) 0%, rgba(203, 33, 189, 1) 100%);
            opacity: 0.8;
            transition: all 0.3s;
        }
    }

    ${LinkStyle} {
        font-size: 13px;
    }

    form > ${InputWithLabel} {
        margin-top: 0;
    }

    form ${InputWithLabel} + ${InputWithLabel} {
        margin-top: 24px;
    }
`;

const OAuthSection = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .title {
        font-size: 13px;
        color: #828282;
    }

    ${OAuthCallButton} {
        margin-left: 12px;
    }
`;

export {
  InputTypeText,
  FormSection,
  InputWithOption,
  InputWithLabel,
  OAuthSection
}
