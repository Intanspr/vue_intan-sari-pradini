# VUE HELPERS #
 Hal2 yang di pelajari di vue helpers:
 1. Navigasi pada vue
 2. Layout template vue
 3. Penyimpanan global
 4. Penyimpanan global permanen

# 1. NAVIGASI PADA VUE
Navigasi adalah kegiatan berpindah dari satu halaman ke halaman yang lain.

## Cara vue melakukan Navigasi
untuk dapat berpindah ke halaman yang diinginkan, pertama yang perlu dipastikan adalah halaman itu ada. jika kita ingin berpindah halaman dari home ke about kita bisa membuka halaman about dengan mengetik manual di address bar:/about.

## Navigasi beranak
Navigasi beranak adalah sub path dari path yang ada yaitu /user/setting/privacy  .
user ( induk dari setting )
setting ( anak dari user dan induk dari privacy )
privacy ( anak dari setting )

## Navigasi Dinamis
adalah dimana path itu memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilai nya satu persatu.

# 2. LAYOUT TEMPLATE VUE
Layout adalah susunan tata letak, sedangkan layout template pada vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing2 halaman.

## Cara kerja Layout template
Pada dasarnya layout hanyalah komponen biasa, yang membedakan adalah layout dapat meneruskan konten dari anak komponen nya.

## Direktori layout
Umumnya layout memiliki direktori terpisah sejajar dengan direktori router atau sejajar dengan direktori view.

# 3. PENYIMPANAN GLOBAL
Adalah sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah diseluruh bagian aplikasi.

## Penyimpanan global pada vuex
Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi vue js.

## Direktori vuex store
Umumnya vuex memiliki direktori store sendiri bernama store yang sejajar dengan main js.

## Vuex Mutations
untuk memodifikasi nilai dari state yang tersimpan didalam store menggunakan syntax Mutation. kemudian dari komponen dapat memanggil fungsi mutations yang telah dibuat.

# 4. PENYIMPANAN GLOBAL PERMANEN
Pada kasus pemakaian tertentu kita perlu mempermanenkan state yang ada di store supaya tidak hilang jika halaman dimuat ulang, konsep ini disebut dengan penyimpanan global permanen
