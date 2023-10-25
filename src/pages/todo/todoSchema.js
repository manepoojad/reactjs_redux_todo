export const createTodoSchema = [
  {
    label: "Date",
    type: "date",
    name: "date",
    readOnly: true,
    placeholder: "yyyy-dd-mm",
  },
  {
    label: "Todo Title",
    type: "text",
    name: "title",
    readOnly: true,
    placeholder: "Enter Todo Title",
  },
  {
    label: "Todo Description",
    type: "textarea",
    name: "description",
    readOnly: true,
    placeholder: "Enter Todo Title",
  },
  {
    label: "UI Technology",
    type: "select",
    name: "uiTech",
    readOnly: true,
    placeholder: "Select UI Tech",
    options: [
      {
        value: "react",
        label: "React",
      },
      {
        value: "angular",
        label: "Angular",
      },
      {
        value: "flutter",
        label: "Flutter",
      },
    ],
  },
  {
    label: "Back-End Technology",
    name: "backEndTech",
    // readOnly: true,
    type: "radio",
    options: [
      { value: "python", label: "Python" },
      {
        value: "net",
        label: ".Net",
      },
      {
        value: "php",
        label: "PHP",
      },
    ],
  },
];
