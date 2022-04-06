# VUE DATA #
Hal2 yang dipelajari di vue data :
1. Data Fetching
2. Penanganan Data Error
3. Validasi Data
4. Autentikasi


# 1. DATA FETCHING
Adalah pengambilan data oleh program perangkat lunak atau skrip. setelah di ambil, data di pindahkan ke lokasi alternatif atau tampilan di layar.

## Cara kerja Fetch API
Singkatan dari API(Application Programming Interface) yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi.

## Apa itu EndPoint?
Saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap sebagai Endpoint, yaitu berbentuk link.

## Fetch Daya dengan Axios
Axios adalah sebuah pustaka yang dipakai frontend untuk melakukan HTTP request kepada link API Endpoint.

## Apa itu Request Queries?
Jika Request adalah permohonan pengambilan data maka Request Queries adalah syarat yang menyatakan data seperti apa yang ingin di ambil.

# 2. PENANGANAN DATA ERROR
JavaScript adalah bahasa yang memiliki tipe data dinamis. Tidak memberikn kesalahan ketika kompilasi, jadi beberapa kali kita akan mendapatkan run-time error untuk mengakses variabel atau fungsi yg undefined. 

Penanganan Data Error adalah konsep untuk mencegah terjadinya runtime-error
## Cara Kerja Promise
Objek promise mewakili penyelesaian atau kegagalan akhirnya dari operasi asinkron dan nilai yang dihasilkannya. Aktivitas berkomunikasi dengan API pada umumnya berbentuk promise.

# 3. VALIDASI DATA
Adalah konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum, terutama pada input pengguna.

## Cara Kerja Validasi Data
Fungsi Validasi menerima nilai yang ingin di cek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean(true/false)
Validasi manual dengan javascript tipe validai ini sangat kustom, biasa menggunakan fungsi dengan if atau switch.
## Validasi dengan regex
Regex adalah singkatan dari Regular Expression. Regex merupakan sebuah teks(string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu kita untuk melakukan matching dan locate.

# 4. AUTENTIKASI
Suatu proses yang menjadi tindakan atau pembuktian validasi terhadap identifikasi pengguna ketika ingin memasuki dan mengakses sistem tertentu.

## Cara Kerja Autentikasi
Pengguna A mengirimkan kredensial yang biasasnya berupa kombinasiusername dan pasword, jika cocok maka server akan mengirim akses token dimana token tersebut adalah pembuktian mutlak kalau pengguna A adalah Pengguna A bukan Pengguna B,C atau yang lain.

## Otorisasi
Authentication untuk mengkonfirmasi pengguna sesuai dengan siapa yang di claim.
Authorization untuk mengatur perizinan terhadap tindakan yang dapat di lakukan pengguna.

# TASKS
Pada tugas kali ini kita mendapatkan tugas yaitu membuat aplikasi berita berita dengan bantuan newsapi.