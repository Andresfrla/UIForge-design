# 📦 **UIForge Design**

> A modern, efficient, and customizable collection of components for your web projects.

## 🌟 **Features**
- **Reusable components**: Designed to integrate seamlessly into any project.
- **Easy customization**: Flexible styles to suit your needs.
- **Optimization**: Fast loading and high performance.
- **Compatibility**: Works with your current stack (React, Vue, or Vanilla JavaScript).

## 🚀 **Installation**
Install the library using npm or yarn:

```bash
npm install uiforge-design
```

```bash
yarn add uiforge-design
```

## 🛠️ **Quick Start**
Import the component you need and add it to your project:

### Example (React):

```jsx
import { Button } from 'uiforge-design';

function App() {
  return (
    <div>
      <Button text="Click me!" onClick={() => alert('Hello World!')} />
    </div>
  );
}

export default App;
```

### Example (Vanilla JS):

```html
<div id="button-container"></div>
<script src="/path/to/uiforge-design.js"></script>
<script>
  const button = new Button({
    text: "Click me!",
    onClick: () => alert('Hello World!')
  });
  document.getElementById('button-container').appendChild(button.element);
</script>
```

## 📚 **Full Documentation**
Check the detailed documentation to learn how to use all available components:

[View Documentation](https://github.com/Andresfrla/UIForge-design)

## 🛡️ **Testing and Quality**
- **Test Coverage**: 95% of components tested with Jest.
- **Linting**: Clean code with ESLint and Prettier.

Run tests locally:

```bash
npm test
```

## 🌍 **Contributing**
Have ideas to improve this library? We'd love to hear your suggestions! Follow these steps to contribute:

1. Fork the repository.
2. Create a branch for your feature or fix (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Submit a pull request.

## 📄 **License**
This library is licensed under the [MIT License](./LICENSE).

---

**Created with ❤️ by [Andrés Franco](https://github.com/Andresfrla).**
