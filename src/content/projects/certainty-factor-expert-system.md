---
title: "Sistem Pakar Certainty Factor"
excerpt: "Aplikasi CodeIgniter untuk mengelola gejala, penyakit, basis pengetahuan, dan konsultasi dengan perhitungan Certainty Factor."
category: "Fullstack"
role: "Web App · Expert System"
stack: ["PHP", "CodeIgniter", "MySQL", "JSON API"]
featured: true
example: false
date: "2025-11-09"
repoUrl: "https://github.com/Defandra-ops/Certainty-Factor"
problem: "Pengelolaan basis aturan dan penilaian keyakinan gejala membutuhkan alur yang konsisten agar hasil konsultasi dapat dihitung dan ditampilkan dengan jelas."
solution: "Aplikasi menyediakan pengelolaan data gejala, penyakit, dan relasi pengetahuan, lalu menerima pilihan gejala serta bobot kondisi untuk menghitung dan mengurutkan hasil Certainty Factor."
---

## Gambaran proyek

Sistem Pakar Certainty Factor adalah aplikasi berbasis CodeIgniter untuk konsultasi berdasarkan gejala dan aturan pengetahuan yang disimpan di database.

## Fitur dan alur

- Admin mengelola data gejala, penyakit, serta relasi pengetahuan dengan nilai MB dan MD.
- Pengguna memilih gejala dan tingkat kondisi saat melakukan konsultasi.
- Sistem menggabungkan nilai Certainty Factor, mengurutkan kandidat hasil, lalu menyajikan deskripsi dan saran yang tersimpan pada data penyakit.
- Hasil konsultasi dapat dicatat bersama gejala dan nilai CF.
- Beberapa endpoint JSON disediakan untuk kebutuhan data gejala, penyakit, dan konsultasi.

## Teknologi dan batasan

Repository menggunakan PHP dengan CodeIgniter dan database MySQL. Aplikasi ini merupakan sistem pakar berbasis aturan; hasilnya adalah informasi dari basis pengetahuan yang dimasukkan, bukan pengganti diagnosis atau konsultasi tenaga kesehatan profesional.
