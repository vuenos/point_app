import {ReactNode} from "react";
import Input, {InputProps} from "./Input";
import {InputWithLabel} from "@/styles/FormStyles";

export interface InputGroupProps extends InputProps {
  children?: ReactNode,
  label?: string,
  title?: string,
  required?: boolean,
  guide?: string | Array<string> | Array<ReactNode>,
  invalidText?: string
}

export default function InputGroup(props: InputGroupProps) {
  const {
    inputId,
    name,
    label,
    title,
    required,
    type = "text",
    className,
    placeholder,
    readonly,
    disabled,
    value,
    maxlength,
    minlength,
    defaultValue,
    guide,
    invalidText,
    children,
    useref,
    onchange,
    onblur,
    onfocus,
    onkeyup,
    onkeydown
  } = props;

  return (
    <InputWithLabel
      className={invalidText ? `${className}` : className}
    >
      {label &&
          <label>
            {title} {required && <span>*</span>}
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
          minlength={minlength}
          className={className}
        />
      }

      {invalidText && <div>{invalidText}</div>}
    </InputWithLabel>
  )
}
