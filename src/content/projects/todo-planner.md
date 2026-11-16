---
title: "Todo Planner"
excerpt: "Aplikasi perencanaan personal untuk mengelola tugas, rutinitas, subtugas, catatan, dan lamaran kerja, dengan dukungan penggunaan offline dan sinkronisasi opsional."
category: "Mobile"
role: "Mobile App · Fullstack"
stack: ["Expo", "React Native", "TypeScript", "Bun", "Hono", "PostgreSQL", "Docker"]
featured: true
example: false
date: "2026-11-12"
repoUrl: "https://github.com/Defandra-ops/To-do-list"
screenshots:
  - src: "/images/screenshot-todo/04-home.png"
    alt: "Halaman beranda Todo Planner dengan ringkasan aktivitas"
  - src: "/images/screenshot-todo/01-welcome-01.png"
    alt: "Layar sambutan pertama Todo Planner"
  - src: "/images/screenshot-todo/02-welcome-02.png"
    alt: "Layar pengenalan kedua Todo Planner"
  - src: "/images/screenshot-todo/03-welcome-03.png"
    alt: "Layar pengenalan ketiga Todo Planner"
  - src: "/images/screenshot-todo/05-tasks.png"
    alt: "Daftar tugas di Todo Planner"
  - src: "/images/screenshot-todo/06-task-history.png"
    alt: "Riwayat tugas Todo Planner"
  - src: "/images/screenshot-todo/07-task-editor.png"
    alt: "Formulir untuk membuat atau mengedit tugas"
  - src: "/images/screenshot-todo/08-overview.png"
    alt: "Halaman ikhtisar dan progres Todo Planner"
  - src: "/images/screenshot-todo/09-people.png"
    alt: "Halaman people di Todo Planner"
  - src: "/images/screenshot-todo/10-settings.png"
    alt: "Pengaturan Todo Planner"
  - src: "/images/screenshot-todo/11-theme-color-picker.png"
    alt: "Pemilih warna tema Todo Planner"
  - src: "/images/screenshot-todo/12-theme-color-recent.png"
    alt: "Pilihan warna tema yang baru digunakan"
  - src: "/images/screenshot-todo/13-calendar.png"
    alt: "Kalender jadwal dan tugas Todo Planner"
  - src: "/images/screenshot-todo/14-calendar-task-detail.png"
    alt: "Detail tugas yang dibuka dari kalender"
  - src: "/images/screenshot-todo/15-settings-task-reminder.png"
    alt: "Pengaturan pengingat tugas Todo Planner"
  - src: "/images/screenshot-todo/16-settings-language-about.png"
    alt: "Pengaturan bahasa dan informasi aplikasi"
problem: "Perencanaan pribadi dapat tersebar di berbagai aplikasi. Pengguna membutuhkan satu tempat untuk mengatur jadwal dan progres tugas, rutinitas, catatan, dan lamaran kerja, termasuk saat perangkat sedang offline."
solution: "Todo Planner menggabungkan fitur perencanaan tersebut dalam aplikasi Expo/React Native. Data disimpan lokal dan backend Bun/Hono dengan PostgreSQL dapat dijalankan secara opsional untuk sinkronisasi."
---

## Gambaran proyek

Todo Planner adalah aplikasi perencanaan personal dengan Android sebagai platform utama dan dukungan web. Proyek juga menyertakan dukungan proyek iOS, sementara beberapa kemampuan hanya tersedia di Android.

## Fitur utama

- Membuat tugas, subtugas, jadwal, tenggat, dan rutinitas harian atau berkala.
- Melihat progres tugas, riwayat, dan kalender perencanaan.
- Menyimpan catatan pribadi dan melacak lamaran kerja.
- Mengatur pengingat lokal, preferensi aplikasi, serta kunci aplikasi di perangkat.
- Menyimpan data secara offline di perangkat dan menyinkronkannya secara opsional melalui backend dan PostgreSQL.
- Memindai dokumen menjadi PDF atau mengekspor halaman sebagai gambar di perangkat Android.

## Arsitektur dan teknologi

Aplikasi mobile dibangun dengan Expo, React Native, dan TypeScript. Penyimpanan lokal menggunakan AsyncStorage. Backend opsional menggunakan Bun, Hono, dan PostgreSQL, serta dapat dijalankan bersama database melalui Docker Compose.

## Catatan platform

Android adalah platform utama. Dukungan web bersifat sebagian, dan fitur native seperti pengingat Android serta pemindaian dokumen bergantung pada development build perangkat.
