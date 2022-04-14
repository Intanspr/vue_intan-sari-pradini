# VUE WITH NUXT #
Hal2 yang dipelajari di materi ini yaitu:
1. Pengenalan Nuxt
2. Struktur Direktori Nuxt
3. Nuxt SSG & SSR
4. SEO Meta
5. PWA

# 1. PENGENALAN NUXT #
Kerangka kerja yang dibangun diatas Vue yang membuat pengembangan web menjadi sederhana dan ampuh.

## Inisiasi Aplikasi
untuk menjalankan aplikasi baru:
$ npx create-nuxt-app <nama-project>
atau
$ npx create-nuxt-app

# 2. STRUKTUR DIREKTORI NUXT
1. Pages
2. Layouts
3. Static

# 3. NUXT SSG DAN SSR
## SSG
Adalah kepanjangan dari Static Site Generation, metode pengembangan ini lebih cocok untuk situs web yang tidak memiliki halaman dinamis.

Cara Kerja SSG yaitu, ketika seebuah proyek dibangun untuk produksi, file HTML siap pakai akan dibuat di folder dist, kemudian disuguhkan oleh server dan dapat diakses per masing masing file HTML.

## SSR
Adalah kepanjangn dari Server Side Rendering, metode pengembangan ini adalah solusi terbaik untuk proyek dimana halaman dibuat secara real time, yaitu melalui panel admin, misalnya, halaman blog dan e-commerce.

Cara Kerja SSR yaitu, server yang dibangun ke dalam Nuxt akan berjalan dalam produksi, yang akan memastikan bahwa file HTML baru dihasilkan secara real time ketika data baru diterima, mis. melalui API

# 4. SEO META
Kepanjangan dari Search Engine Optimization, yaitu proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs we atau halaman web dari mesin pencari.

Sedangkan SEO META tag adlah tag tak terlihat di dalam <head> yang memberikan data tentang halaman ke mesin penacri dan pengunjung situs web.

## Cara kerja SEO META
Seo Meta tag dapat diterapkan dari Nuxt config untuk pengaturan global, yaitu konten head akan sama di setiap halaman aplikasi.

# 5. PWA
Kepanjangan dari Progressive Web Apps, dibuat dan di sempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau sipa saja, dimana saja, diperangkat apapun dengan basis kode tunggal.

## Cara kerja PWA
1. Web App Manifest
2. Service Workers
3. Icon
4. Disajikan melalui protokol HTTPS