# QA Automation Portfolio — Playwright UI & API Testing

This project is a part of my QA Automation portfolio focusing on **UI**, **API**, and **E2E Flow** using **Playwright**. 
This repository demonstrates my capability in building modern, scalable and maintainable automated test using **Page Object Model (POM)** and following industry best practice.

---

## Tech Stack

- **Playwright** (UI & API Testing)
- **Node.js**
- **JavaScript**
- **Page Object Model (POM)**
- **GitHub Actions** (opsional – CI/CD)
- **K6** (Performance Testing – coming soon)

---

## 📌 Features

### UI Automation (Playwright)
- Login (positive & negative scenarios)
- Add multiple products to cart
- Remove items from cart
- Open cart & validate items
- Checkout flow (information → overview → finish)
- Extracting and validating dynamic values (ex: total price)
- Validating success/confirmation pages

### API Testing (coming soon)
- Sample API test using Playwright APIRequest

### Performance Testing (coming soon)
- Load Testing using **k6**
- Stress Testing and Ramp Scenarios

---

## 📂 Project Structure

qa-ui-playwright/
│
├── pages/
│   ├── login.js
│   ├── cart.js
│   └── checkout.js
│
├── tests/
│   ├── auth.spec.js
│   ├── negative-case.spec.js
│   └── cart.spec.js
│
├── playwright-report/
├── test-results/
├── playwright.config.js
├── package.json
└── README.md

## ▶️ How to Run the Tests

1. Install dependencies
npm install

2. Run all tests
npx playwright test

3. Run a specific test file
npx playwright test tests/cart.spec.js

4. Open Playwright HTML Report
npx playwright show-report

## 🧱 Design Pattern — Page Object Model (POM)

This project implements the **Page Object Model (POM)** to ensure clean separation between:
 - Element locators
 - Page actions
 - Test flow logic

This makes the code modular, easy to maintain, and scalable.

## HTML Test Report

Playwright automatically generates a detailed HTML test report including:
 - Test status
 - Execution timeline
 - Screenshots
 - Trace logs
 - Error details

To open the latest report:
    npx playwright show-report

## Author

**Marco — QA Automation Engineer**
- UI Automation (Playwright)
- API Testing
- Performance Testing (k6)
- CI/CD Integration
- 4+ Years Experience in QA & Software Testing

LinkedIn: [Marco Maureece M](https://www.linkedin.com/in/marco-maureece-maribondang-145260190)
GitHub: [marco0778/qa-ui-playwright](https://github.com/marco0778/qa-ui-playwright)