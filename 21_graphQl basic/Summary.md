# Understanding GraphQL Basic #
Hal2 yang di pelajari pada materi ini yaitu:
1. GraphQL overview
2. Hasura & Heroku
3. Apollo setup
4. Query
5. Mutation
6. Subscription

# 1. GraphQL Overview
Ada 3 fitur pada GraphQL yaitu:
1. Query, untuk mendapatkan data berdasarkan query spesifik yang ditentukan.
2. Mutation, untuk insert, update dan delete data.
3. Subscription, untuk mendapatkan data terbaru secara realtime atau berdasarkan peristiwa.

# 2. Hasura dan Heroku
## Hasura
Hasura adalah layanan yang menyediakan graphql dan rest api.  Full manoged di hasura cloud atau self-hosted.

## Heroku
Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman.  Heroku juga menyediakan database postgres gratis.

# 3. Apollo Setup
Apollo Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL.  Gunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis.  Pustaka inti @apollo/client menyediakan integrasi bawaan dengan React.  Kami menggunakan klien Apollo untuk melakukan operasi GraphQL (kueri, mutasi, dan berlangganan) di dalam aplikasi React atau Next JS kami.  Klien Apollo bekerja dengan baik dengan server GraphQL (Hasura, Apollo Server, dll)

# 4. Query
Dengan graphQL kita bisa mendapatkan data yang kita butuhkan.  Kami menentukan bidang apa yang ingin kami dapatkan dan graphQL akan memberi kami data berdasarkan apa yang kami definisikan.  Sebagai contoh, bayangkan ada satu koleksi dalam database yang menyimpan data film.  Semua data yang tidak dibutuhkan seperti direktur, create_at dan updated_at tidak akan disertakan dalam hasil.

# 5. Mutation
Mutation pada dasarnya adalah fungsi untuk memperbarui, menyisipkan dan menghapus data.  Kita perlu mendefinisikan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia di server graphql Anda) dan kemudian menentukan data siapa yang harus dikembalikan GraphQL.

# 6. Subscription
Subscription adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat peristiwa tertentu terjadi.  Subscription biasanya diimplementasikan dengan WebSockets.  Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien Subscription nya.  Ketika data diubah maka klien akan mendapatkan pembaruan dota secara langsung secara real-time.  Pada contoh di bawah ini, jika kita berlangganan koleksi orang maka setiap kali orang baru ditambahkan atau ketika dota dihapus atau diubah maka kita akan mendapatkan data yang diperbarui secara real-time langsung ke klien kami.  Berlangganan hanya akan terjadi di sisi klien bukan sisi server.