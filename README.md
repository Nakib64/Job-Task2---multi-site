# Multi-Site Generator (Next.js App Router)

Generate multiple standalone Next.js apps dynamically from a CSV file.

---

## Features

- Generates individual Next.js apps for each row in `websites.csv`
- Uses **Next.js App Router**
- Hero section with random slogan (`Quick | Fast | Speedy`)
- Contact section displays **phone and address** from CSV
- Fully dynamic: update CSV and regenerate sites
- Each site is **standalone** and can run independently

---

## Folder Structure

multi-site-generator/
├─ package.json
├─ websites.csv
├─ generate-and-build.js
├─ template/
│ ├─ package.json
│ ├─ app/
│ │ ├─ page.js
│ │ └─ layout.js
│ ├─ component/
│ │ ├─ Hero.js
│ │ └─ Contact.js
│ └─ globals.css
├─ build/
│ ├─ foodexpress.com/
│ ├─ techhubbd.com/
│ └─ bookbazaar.com/



---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Nakib64/Job-Task2---multi-site.git
cd multi-site-generator

npm install

node generate-and-build.js
```
---

### Run every apps

```bash
cd build/foodexpress.com
npm run dev
```