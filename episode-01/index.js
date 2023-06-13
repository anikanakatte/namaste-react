// using javascript

const heading0 = document.createElement("h1");
heading0.innerHTML = "Hello, using JavaScript";

const container1 = document.getElementById("container");
container1.appendChild(heading0);

// using React

const heading = React.createElement(
  "h1",
  {
    key: "heading-1",
    id: "heading1",
  },
  "Hello in ",
  React.createElement("i", {}, "React")
);
const heading2 = React.createElement(
  "h2",
  {
    key: "heading-2",
    id: "heading2",
    style: { color: "red" },
  },
  "Heading 2"
);

const container = React.createElement("div", {}, [heading, heading2]);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
