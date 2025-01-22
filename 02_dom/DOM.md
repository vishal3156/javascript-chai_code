**Document Object Model (DOM) Notes**

---

### 1. **What is the DOM?**

- The DOM is a **tree-like structure** that represents an HTML document.
- Every part of a webpage (tags, text, attributes, etc.) is treated as an **object** in this tree.

---

### 2. **Why does the DOM matter?**

- It allows programming languages like **JavaScript** to dynamically interact with and change the webpage.
- Example: You can show/hide elements, change styles, or update content based on user interactions.

---

### 3. **How is the DOM structured?**

The DOM is like a **family tree**:

- The **document** is the root of the tree.
- HTML elements (like `<html>`, `<body>`, `<h1>`, etc.) are **nodes**.
- Nodes can have **parent-child relationships**:
  - A node inside another node is its **child**.
  - Nodes at the same level are **siblings**.

#### Example HTML Document:

```html
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

#### DOM Tree Representation:

```
- document
  - html
    - head
      - title
    - body
      - h1
      - p
```

---

### 4. **How do you interact with the DOM?**

Use **JavaScript** to access or modify the DOM.

#### Common Actions:

1. **Select elements**:

   ```javascript
   document.querySelector("h1"); // Selects the first <h1>
   document.querySelectorAll("p"); // Selects all <p> elements
   document.getElementById("idName"); // Selects element by ID
   document.getElementsByClassName("className"); // Selects elements by class
   ```

2. **Change content**:

   ```javascript
   document.querySelector("h1").textContent = "Hello DOM!";
   document.querySelector("h1").innerHTML = "<strong>Bold Text</strong>";
   ```

3. **Change attributes**:

   ```javascript
   document.querySelector("img").setAttribute("src", "image.jpg");
   document.querySelector("a").href = "https://example.com";
   ```

4. **Change styles**:

   ```javascript
   document.querySelector("p").style.color = "blue";
   document.querySelector("p").style.fontSize = "18px";
   ```

5. **Add elements**:

   ```javascript
   const newPara = document.createElement("p");
   newPara.textContent = "This is a new paragraph!";
   document.body.appendChild(newPara);
   ```

6. **Remove elements**:
   ```javascript
   const element = document.querySelector("p");
   element.remove();
   ```

---

### 5. **Why is it called a "tree"?**

- The DOM starts from a single root (`<html>`) and branches out to other elements, forming a hierarchical structure like a tree.

---

### 6. **Key DOM Terms:**

- **Node**: Any object in the DOM tree (e.g., element, text, or attribute).
- **Element**: A specific type of node representing an HTML tag (e.g., `<h1>`).
- **Attribute**: A property of an element (e.g., `class="title"`).
- **Text**: The actual content inside an element (e.g., "Hello World").

---

### 7. **What can you do with the DOM?**

- **Update text or styles** dynamically.
- **Handle user events** (e.g., button clicks, hover effects, or form submissions).
- **Create interactive elements** (e.g., modals, tabs, or dropdowns).

---

### 8. **Common DOM Methods:**

1. **Element Selection:**

   - `document.querySelector()`
   - `document.querySelectorAll()`
   - `document.getElementById()`
   - `document.getElementsByClassName()`
   - `document.getElementsByTagName()`

2. **Manipulation:**

   - `element.textContent` (Change text content)
   - `element.innerHTML` (Change inner HTML)
   - `element.style` (Modify styles)
   - `element.setAttribute()` / `element.getAttribute()` (Change/get attributes)
   - `element.classList.add()` / `element.classList.remove()` (Add/remove classes)

3. **Create/Remove Elements:**
   - `document.createElement()` (Create a new element)
   - `parentNode.appendChild()` (Add element to a parent)
   - `parentNode.removeChild()` or `element.remove()` (Remove element)

---

### 9. **DOM Events:**

Events allow you to respond to user interactions (e.g., clicks, typing, or scrolling).

#### Common Events:

- `click`: Triggered when an element is clicked.
- `input`: Triggered when a user types in an input field.
- `mouseover`: Triggered when the mouse hovers over an element.
- `submit`: Triggered when a form is submitted.

#### Event Listener Example:

```javascript
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

### 10. **Think of the DOM as:**

A **blueprint** of your webpage that you can modify in real-time using JavaScript.

---

### 11. **Helpful Tips:**

- Always check for **null** when selecting elements to avoid errors.
  ```javascript
  const element = document.querySelector(".non-existent");
  if (element) {
    element.textContent = "Found!";
  }
  ```
- Use `console.log()` to debug and inspect elements in the DOM.
- Avoid directly modifying `innerHTML` unless necessary (to prevent security risks like XSS).

---

### 12. **Practice Examples:**

#### Change Heading Text:

```javascript
const heading = document.querySelector("h1");
heading.textContent = "New Heading!";
```

#### Add a List Item:

```javascript
const list = document.querySelector("ul");
const listItem = document.createElement("li");
listItem.textContent = "New Item";
list.appendChild(listItem);
```

#### Change Background Color on Click:

```javascript
const button = document.querySelector("button");
button.addEventListener("click", () => {
  document.body.style.backgroundColor = "lightblue";
});
```

---
```
  const clock = document.querySelector("#id");

  setInterval(() {
    
  })