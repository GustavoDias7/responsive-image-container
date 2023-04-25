function form({ formSelector = "", fields = [] }) {
  const $form = document.querySelector(formSelector);

  fields.forEach((field) => {
    const $field = document.createElement("input");
    const $label = document.createElement("label");
    const $row = document.createElement("div");
    const $rightElement = document.createElement("div");
    const $inputContainer = document.createElement("div");

    $row.classList.add("row");

    $field.setAttribute("id", field?.id || field.name);
    $field.setAttribute("name", field.name);
    $field.setAttribute("type", field?.type || "text");

    $label.setAttribute("for", field.name);

    if (field.type === "checkbox") {
      $label.classList.add("check");

      const $marker = document.createElement("span");
      $marker.classList.add("marker");

      const $text = document.createElement("span");
      $text.classList.add("text");
      $text.innerText = field.label;

      $label.appendChild($field);
      $label.appendChild($marker);
      $label.appendChild($text);
      $row.appendChild($label);
    } else {
      $label.classList.add("label");
      $field.classList.add("input");
      $rightElement.classList.add("right-element");
      $inputContainer.classList.add("input-container");

      const $rightText = document.createElement("p");
      $rightText.innerText = "Right";
      $rightElement.appendChild($rightText);

      switch (field.variant || "") {
        case "filled":
          $field.classList.add(field.variant);
          $label.innerText = field.label;

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $inputContainer.appendChild($label);
            $inputContainer.appendChild($rightElement);
            $row.appendChild($inputContainer);
          } else {
            $row.appendChild($field);
            $row.appendChild($label);
          }
          break;
        case "outline":
          $field.classList.add(field.variant);

          const $span = document.createElement("span");
          $span.innerText = field.label;

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $label.appendChild($span);
            $inputContainer.appendChild($label);
            $inputContainer.appendChild($rightElement);
            $row.appendChild($inputContainer);
          } else {
            $row.appendChild($field);
            $label.appendChild($span);
            $row.appendChild($label);
          }
          break;

        default:
          $label.innerText = field.label;

          $row.appendChild($label);

          if (field?.rightElement) {
            $inputContainer.appendChild($field);
            $inputContainer.appendChild($rightElement);
            $row.appendChild($inputContainer);
          } else {
            $row.appendChild($field);
          }

          break;
      }
    }

    $form.appendChild($row);
  });

  console.log($form.outerHTML);
}
module.exports = form;
