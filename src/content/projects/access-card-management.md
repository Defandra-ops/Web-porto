---
title: "Access Card Management"
excerpt: "Aplikasi CodeIgniter untuk mengelola kartu akses, grup, pengguna, perangkat, reader, dan laporan."
category: "IT Support"
role: "Web App · Access Management"
stack: ["PHP", "CodeIgniter", "MySQL", "cURL"]
featured: true
example: false
date: "2025-11-17"
repoUrl: "https://github.com/Defandra-ops/accesscard"
problem: "Data kartu akses, grup pengguna, perangkat, dan reader perlu dikelola dari satu aplikasi agar pembaruan serta pemeriksaan status operasional lebih teratur."
solution: "Aplikasi menyediakan modul administrasi kartu dan perangkat, termasuk pencegahan nomor kartu duplikat, pengelolaan reader, dan halaman laporan."
---

## Gambaran proyek

Access Card Management adalah aplikasi administrasi berbasis CodeIgniter dengan modul untuk pengelolaan kartu, reader, perangkat, pengguna, grup, dan laporan.

## Fitur yang tercatat di repository

- Menambahkan kartu dan memeriksa agar nomor kartu tidak terdaftar ganda.
- Mengubah status kartu dan mengatur keterkaitan kartu dengan grup atau perangkat.
- Mengelola reader, termasuk nama, alamat IP, dan status.
- Memeriksa konektivitas reader melalui permintaan HTTP dan pemeriksaan jaringan.
- Mengelola pengguna dan grup serta menampilkan laporan.

## Teknologi

Repository menggunakan PHP dengan framework CodeIgniter dan database MySQL. Pemeriksaan reader menggunakan HTTP/cURL dan ping pada lingkungan server yang menjalankan aplikasi.
