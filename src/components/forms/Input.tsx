import { ChangeEvent, LegacyRef, MouseEvent, FocusEvent, KeyboardEvent } from "react";
import { InputTypeText } from "@/styles/FormStyles";

export interface InputProps {
    inputId?: string,
    name?: string,
    type?: string, 
    placeholder?: string,
    readonly?: boolean,
    disabled?: boolean,
    invalid?: boolean,
    value?: string,
    defaultValue?: string,
    maxlength?: number,
    useref?: LegacyRef<HTMLInputElement>,
    className?: string,
    onchange?: (e: ChangeEvent<HTMLInputElement>) => void,
    onblur?: (e: FocusEvent<HTMLInputElement>) => void,
    onfocus?: (e: FocusEvent<HTMLInputElement>) => void,
    onkeyup?: (e: KeyboardEvent<HTMLInputElement>) => void,
    onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void,
}

export default function Input(props: InputProps) {
    const {
        inputId, name, type, placeholder, readonly, disabled, invalid, value, defaultValue, useref, maxlength, className, onchange, onblur, onfocus, onkeyup, onkeydown
    } = props;

    return (
        <>
            <InputTypeText
                id={inputId}
                name={name}
                className={className}
                type={type || "text"}
                placeholder={placeholder}
                readOnly={readonly}
                disabled={disabled}
                value={value}
                defaultValue={defaultValue}
                maxLength={maxlength}
                ref={useref}
                onChange={onchange}     
                onBlur={onblur}
                onFocus={onfocus}
                onKeyUp={onkeyup}
                onKeyDown={onkeydown}    
            />
        </>
    )
}