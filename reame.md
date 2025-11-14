# Shopping List App

A simple **Shopping List** web application built with **Angular 20**.  
This project demonstrates a modern Angular setup using components, TypeScript interfaces, reactive signals, and standalone components. It is deployed on **GitHub Pages**.

---

## 🔹 Features

- Add items to the shopping list.  
- Remove items from the list.  
- Client-side rendering only (CSR), optimized for GitHub Pages.  
- Built with **Angular 20**, using **standalone components** and **TypeScript interfaces**.  
- No backend required – everything runs in the browser.

---

## 🔹 Project Structure

shopping-list-angular/  
├─ src/     
│ ├─ app/   
│ │ ├─ shopping-list/ # Shopping list component     
│ │ └─ app.* # Root app files       
├─ dist/ # Build output (used for deployment)       
├─ angular.json     
├─ package.json     
└─ README.md        


- `src/app/shopping-list/` contains the main component for the shopping list.  
- `dist/shopping-list/browser/` contains the production-ready files deployed to GitHub Pages.

---

## 🔹 Installation / Run Locally

Make sure you have **Node.js** and **Angular CLI 20** installed.

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/shopping-list-angular.git
cd shopping-list-angular
```
2. Install dependencies:

```bash
npm install
```
3. Run the development server:
```bash
ng serve --open
```
The app will open in your browser at http://localhost:4200.

## 🔹 Build & Deployment to GitHub Pages


1. Build the app for production:

```bash
ng build --configuration production --base-href "/shopping-list-angular/"
```


2. Deploy to GitHub Pages:

```bash
npx angular-cli-ghpages --dir=dist/shopping-list/browser
```


The app will be available at:
https://rogercanet.github.io/shopping-list-angular/



⚠️ Make sure to point --dir to dist/shopping-list/browser, not the server folder, since GitHub Pages only serves static files.


## 🔹 Technologies Used


- Angular 20


- TypeScript


- HTML / SCSS


- GitHub Pages for hosting



## 🔹 Notes


- This project uses Client-Side Rendering (CSR) only.


- The shopping list is not persistent; refreshing the page will clear the list.


- The project is designed as a learning and CV project, demonstrating Angular best practices.


🔹 Author


Roger Canet – [GitHub](https://github.com/RogerCanet)