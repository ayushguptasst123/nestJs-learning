# NestJS From Scratch 🚀

Welcome to my NestJS learning repository!

In this repo, I document my journey of learning **NestJS** from the ground up — without using the CLI. Instead, I manually installed dependencies and built everything step by step to understand how things work internally.

---

## 📚 Topics Covered

- 🚀 Getting Started with NestJS (without CLI)
- 📦 Manual dependency installation with specific versions
- ⚙️ Basic project setup
- ▶️ Running a TypeScript file manually
- 🧠 Understanding core concepts from scratch

---

## 🚀 Getting Started

### 1. Initialize Project

```bash
npm init -y
```

---

### 2. Install Dependencies (Manual Setup)

```bash
npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
```

---

### 3. Install Dev Dependency

```bash
npm install -D ts-node-dev
```

---

### 4. Create `main.ts`

```ts
import "reflect-metadata";

console.log("NestJS app starting...");
```

---

### 5. Run the Application

```bash
npx ts-node-dev main.ts
```

---

## 📂 Basic Project Structure

```
.
├── main.ts
├── package.json
├── tsconfig.json
└── node_modules/
```

---

## 💡 Why Learn This Way?

Most tutorials use the NestJS CLI, which hides important setup details.

By building from scratch:

- You understand how NestJS works internally
- You learn the purpose of each dependency
- You gain full control over your setup

---

## 🎯 Bonus Ideas

- Add a simple controller manually
- Create a module and service
- Learn dependency injection
- Connect Express adapter
- Upgrade dependencies to latest versions

---

## 📌 Conclusion

This project is about learning NestJS by building everything manually from the ground up.

If you want to truly understand how NestJS works behind the scenes, this is a great starting point.

---

Happy Coding 😄
