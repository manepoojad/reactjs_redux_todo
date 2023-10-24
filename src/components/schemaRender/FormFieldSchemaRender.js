import React from "react";

function FormFieldSchemaRender(props) {
  const { formFieldItem, onChange = () => {}, formValueObject = {} } = props;
  console.log(onChange);
  if (formFieldItem.type == "textarea") {
    return (
      <div>
        <label>{formFieldItem.label}:</label>
        <textarea
          readOnly={formFieldItem.readOnly}
          type={formFieldItem.type}
          name={formFieldItem.name}
          value={formValueObject[formFieldItem.name]}
          placeholder={formFieldItem.placeholder}
          onChange={(e) => onChange(e)}
        />
      </div>
    );
  } else if (formFieldItem.type == "select") {
    return (
      <div>
        <label>{formFieldItem.label}:</label>
        <select
          disabled={formFieldItem.readOnly}
          type={formFieldItem.type}
          name={formFieldItem.name}
          value={formValueObject[formFieldItem.name]}
          onChange={(e) => onChange(e)}
        >
          <option value="">{formFieldItem.placeholder}</option>
          {formFieldItem.options.map((optionItem, optionItemIndex) => {
            return <option value={optionItem.value}>{optionItem.label}</option>;
          })}
        </select>
      </div>
    );
  } else if (formFieldItem.type == "text" || formFieldItem.type == "date") {
    return (
      <div>
        <label>{formFieldItem.label}:</label>
        <input
          readOnly={formFieldItem.readOnly}
          type={formFieldItem.type}
          name={formFieldItem.name}
          value={formValueObject[formFieldItem.name]}
          placeholder={formFieldItem.placeholder}
          onChange={(e) => onChange(e)}
        />
      </div>
    );
  }

  return <></>;
}

export default FormFieldSchemaRender;
