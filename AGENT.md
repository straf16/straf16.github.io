# 📄 AGENT.md — Personal Website Revamp (Mobile-First & UX Focus)

## 🧠 Project Overview
Website saat ini: https://straf16.github.io/

Tujuan:
- Meningkatkan personal branding sebagai developer
- Menerapkan mobile-first design
- Memperbaiki UX (user experience)
- Membuat website lebih menarik bagi recruiter

---

## 🎯 Goals

1. Website harus:
   - Mobile-first (prioritas tampilan HP)
   - Cepat diakses (lightweight)
   - Mudah dipahami dalam 5–10 detik

2. Menampilkan:
   - Identitas sebagai developer
   - Skill utama
   - Project
   - Informasi kontak

3. Meningkatkan:
   - Readability
   - Visual hierarchy
   - Navigasi

---

## 👤 Target Audience

- Recruiter / HR
- Hiring Manager
- Tech Lead
- Client freelance

---

## 📱 Design Approach

### Mobile First
- Desain dimulai dari layar kecil (≤ 480px)

### Breakpoints
- Mobile: ≤ 480px
- Tablet: 481px – 768px
- Desktop: ≥ 769px

### UX Principles
- Simple & clean
- Minim friction
- Clear CTA
- Above-the-fold clarity

---

## 🧱 Website Structure

### 1. Hero Section
Tujuan: First impression (5 detik)

Isi:
- Nama
- Role
- Tagline (value proposition)
- CTA

Contoh:
Pada project ini sudah ada pada file src/Section/Home/Home.js

### 2. About Me
Tujuan: Personal branding

Isi:
- Background singkat
- Fokus teknologi
- Interest

---

### 3. Skills
Tujuan: Menunjukkan kemampuan

Kategori:
- Frontend
- Tools
- Optional backend

Bagian ini bisa ambil dari file src/Section/Skill/Skill.js

---

### 4. Projects
Tujuan: Menjual skill

Setiap project:
- Nama
- Deskripsi
- Tech stack
- Screenshot
- Link:
  - Demo
  - GitHub

Bagian ini bisa dibuat to be attach, tapi buatkan template untuk card project

---

### 5. Contact
Tujuan: Call to action

Isi: (ada di file src/Section/Contact/Contact.js)
- Email
- LinkedIn
- GitHub

CTA:
- "Let's work together"
- "Open for opportunities"

---

## 🎨 UI Guidelines

### Typography
- Clean font (Inter / Poppins)
- Jelas hierarchy

### Colors
- Maks 2–3 warna utama
- High contrast

### Spacing
- Konsisten
- Tidak terlalu padat

---

## ⚡ Performance

- Image optimization
- Lazy loading

Hindari:
- JS berat
- Animasi berlebihan

Target:
- Load < 3 detik

---

## 🧭 Navigation

### Mobile
- Simple scroll / hamburger

### Desktop
- Navbar (optional sticky)

Menu:
- Home
- About
- Projects
- Contact

---

## 📌 UX Improvements

Masalah saat ini:
- Tidak mobile friendly
- Value tidak jelas
- Project kurang detail
- Navigasi kurang rapi

Solusi:
- Tambah hero section
- Perjelas CTA
- Susun ulang layout
- Fokus ke storytelling

---

## 🚀 Optional Features

- Dark mode
- Blog (optional)
- Download CV
- Animasi ringan

---

## 🧪 Success Criteria

- User paham dalam 5 detik
- Recruiter bisa:
  - Lihat project
  - Contact langsung
- Mobile nyaman digunakan

---

## 🛠️ Tech Stack

Gunakan Tech Stack pada project ini
---
