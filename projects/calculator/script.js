// calculator

let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

function operate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "/":
      if (num2 === 0) {
        window.alert("Can't divide by zero");
        display.value = "";
        return;
      }
      return divide(num1, num2);
  }
}

// ui creation

function add_button(button_name, add_to, id_name) {
  button = document.createElement("button");
  button.textContent = button_name;
  button.setAttribute("id", id_name);
  add_to.appendChild(button);
}

let numpad = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

let ops = ["+", "-", "x", "/"];

const numpad_div = document.querySelector('div[id="num_pad"]');

const operations_div = document.querySelector('div[id="operators"]');

numpad.forEach((element) => {
  add_button(element, numpad_div, "numbers");
});

add_button(".", numpad_div, "dot");

ops.forEach((element) => {
  add_button(element, operations_div, "operations");
});

add_button("C", operations_div, "clear");

add_button("=", operations_div, "equal");

// ui actions

function is_op(character) {
  for (let op_count = 0; op_count < ops.length; op_count++) {
    if (ops[op_count] === character) {
      return true;
    }
  }
  return false;
}

let dot_usable = true;

const display = document.querySelector('input[id="display"]');

const number_buttons = numpad_div.querySelectorAll("button[id='numbers']");

const ops_buttons = operations_div.querySelectorAll("button[id='operations']");

const dot_button = document.querySelector("button[id='dot']");

const clear_button = document.querySelector("button[id='clear']");

const equal_button = document.querySelector("button[id='equal']");

function split_by_ops(result) {
  let last_op = 0;
  let numbers = [],
    ops = [];
  for (let index = 0; index < result.length; index++) {
    if (is_op(result[index])) {
      ops.push(result[index]);
      numbers.push(result.slice(last_op, index));
      last_op = index + 1;
    }
  }
  numbers.push(result.slice(last_op, result.length));
  return { numbers, ops };
}

number_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.textContent;
  });
});

dot_button.addEventListener("click", () => {
  if (dot_usable) {
    display.value += ".";
    dot_usable = false;
  }
});

ops_buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button_name = button.textContent;
    if (
      display.value !== "" &&
      !is_op(display.value[display.value.length - 1])
    ) {
      display.value += button_name;
      dot_usable = true;
    }
  });
});

clear_button.addEventListener("click", () => {
  display.value = "";
  dot_usable = true;
});

equal_button.addEventListener("click", () => {
  //TODO: check for divid by zero
  let ans = 0;
  let parsed_result = split_by_ops(display.value);
  ans = operate(
    parseFloat(parsed_result.numbers.shift()),
    parseFloat(parsed_result.numbers.shift()),
    parsed_result.ops.shift()
  );
  while (parsed_result.numbers.length != 0) {
    ans = operate(
      ans,
      parseFloat(parsed_result.numbers.shift()),
      parsed_result.ops.shift()
    );
  }
  if (display.value.length !== 0) {
    dot_usable = !ans.toString().includes(".");
    display.value = ans;
  }
});
