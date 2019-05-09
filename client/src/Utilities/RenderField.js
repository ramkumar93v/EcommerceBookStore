import React, { Component } from "react";

const RenderField = ({
  input,
  label,
  type,
  className,
  placeholder,
  fontAwesome,
  meta: { touched, error, warning }
}) => {
  const hasError = (touched && error) || warning ? "has-error" : "";

  switch (type) {
    case "textarea":
      return (
        <div>
          <div className={`input-group ${hasError}`}>
            <span className="input-group-addon">
              <i className={fontAwesome} />
            </span>
            <textarea
              {...input}
              placeholder={label}
              type={type}
              placeholder={placeholder}
              className={className}
            />
          </div>
          {touched &&
            ((error && <span className="text-danger">{error}</span>) ||
              (warning && <span className="text-danger">{warning}</span>))}
        </div>
      );

    default:
      return (
        <div>
          <div className={`input-group ${hasError}`}>
            <span className="input-group-addon">
              <i className={fontAwesome} />
            </span>
            <input
              {...input}
              placeholder={label}
              type={type}
              placeholder={placeholder}
              className={className}
            />
          </div>
          {touched &&
            ((error && <span className="text-danger">{error}</span>) ||
              (warning && <span className="text-danger">{warning}</span>))}
        </div>
      );
  }
};

export default RenderField
