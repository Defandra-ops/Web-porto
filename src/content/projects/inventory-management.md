---
title: "Inventory & Money Management (On Progress)"
excerpt: "Aplikasi Laravel dengan API untuk mengelola data produk, stok inventaris, akun keuangan, dan transaksi debit atau kredit."
category: "Fullstack"
role: "Web App · Backend & API"
stack: ["Laravel 12", "PHP 8.2", "MySQL", "REST API", "Docker"]
featured: true
example: false
date: "2026-06-17"
repoUrl: "https://github.com/Defandra-ops/Inventory-app"
problem: "Data barang, jumlah stok, saldo akun, dan transaksi perlu disimpan dengan struktur yang konsisten agar lebih mudah dikelola dan dikembangkan."
solution: "Proyek ini menyediakan fondasi aplikasi Laravel, model dan migrasi untuk produk, inventaris, akun, dan transaksi, serta endpoint JSON untuk operasi data utama."
---

## Gambaran proyek

Inventory & Money Management adalah aplikasi backend berbasis Laravel yang menggabungkan pengelolaan produk dan stok dengan pencatatan akun serta transaksi keuangan.

## Fitur dan alur data

- Mencatat produk dengan nama, SKU, harga, dan jumlah.
- Menyediakan endpoint untuk membaca dan menambahkan data produk serta akun.
- Mencatat transaksi kredit atau debit pada akun beserta nominal dan deskripsi.
- Menggunakan migrasi dan model Eloquent untuk struktur data.
- Menyediakan konfigurasi Docker Compose untuk MySQL dan phpMyAdmin pada lingkungan lokal.

## Teknologi

Backend dibangun menggunakan Laravel 12 dan PHP 8.2. MySQL digunakan pada konfigurasi Docker Compose proyek. Repository juga mencatat kebutuhan pengembangan lanjutan seperti autentikasi dan tampilan frontend.
