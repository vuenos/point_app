import { ReactNode } from "react";
import Input, { InputProps } from "./Input";

export interface InputGroupProps extends InputProps {
   children?: ReactNode,
   label?: string,
   required?: boolean,
   className?: "invalid",
   guide?: string | Array<string> | Array<ReactNode>,
   invalidText?: string
}

export default function InputGroup(props: InputGroupProps) {
    const {
        inputId, name, label, required, type="text", className, placeholder, readonly, disabled, value, maxlength, defaultValue, guide, invalidText, children, useref, onchange, onblur, onfocus, onkeyup, onkeydown
    } = props;

    return (
        <div
            className={invalidText ? `${className}` : className}
        >
            {label && 
                <label>
                    {label} {required && <span>*</span>}
                </label>
            }

            {children 
                ? children
                : <Input 
                    inputId={inputId}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    readonly={readonly}
                    disabled={disabled}
                    value={value}
                    defaultValue={defaultValue}
                    useref={useref}
                    onchange={onchange}
                    onblur={onblur}
                    onfocus={onfocus}
                    onkeyup={onkeyup}
                    onkeydown={onkeydown}
                    maxlength={maxlength}
                />
            }

            {invalidText && <div>{invalidText}</div>}
        </div>
    )
}