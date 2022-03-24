# KOMPONEN VUE # 

Pada materi ini hal2 yang di pelajari yaitu 
1. Module export dan import
2. Komponen dapat digunakan kembali 
3. Paradigma fungsi pembantu 
4. Instance lifecycle hooks 

# 1. Module Export dan Import
## Javascript module
Modul bisa berisi kelas atau pustaka fungsi untuk tujuan tertentu. Modul hanyalah sebuah file. Satu kode script adalah 1 modul. 

## Perbedaan module dan regular script
Modul bisa memuat satu sama lain dan menggunakan pengarah khusus export & import  untuk fungsi pertukaran, memanggil fungsi dari satu modul ke modul lain nya.
CJS (Impor semua isi)
ESM (Impor yang dibutuhkan saja) 

## Export
Ada 2 Tipe Export:
1. Export Const
2. Export Default 

## Import
Ada 4 Tipe Import:
1. Import target
2. Import { target }
3. Import { target as t }
4. Import targetDefault, { Target as t }


# 2. KOMPONEN VUE YANG DAPAT DIGUNAKAN KEMBALI
Sebuah komponen file tunggal vue yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda.
Untuk mengekspos data dari induk ke anak dapat di lakukan dengan props dan emits. Props untuk variabel dan emits untuk fungsi. 

# 3. PARADIGMA FUNGSI PEMBANTU 
Yaitu sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda. 

Fungsi pembantu bisa diberi nama berbeda2 namun harus mudah di mengerti, jamak dan self-descripting seperti:
1. Utilities
2. Utils
3. Helpers
4. Tools 

Beberapa contoh fungsi pembantu yang sering dipakai:
1. Operator
2. Formatter
3. Validator
4. Generator 

# 4. INSTANCE LIFECYCLE HOOKS
Setiap vue instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai lifecycle atau siklus hidup. 

## 3 Lifecycle utama 
Diantara banyaknya lifecycle hooks, tidak perlu memahami dengan penuh apapun yang terjadi. Cukup memahami 3 lifecycle utama yang memiliki fungsi masing2 sebagai berikut: 

1. Created
Berlangsung setelah instance terbentuk dan sebelum DOM dirender. 

2. Mounted
Berlangsung setelah DOM di render. 

3. Destroyed
Berlangsung sebelum instance di hancurkan.


# TASKS
Pada task kali ini masih tugas yang sama yaitu membuat todolist, berbeda dengan tugas yang kemaren karena tugas kali ini dengan menggunakan component file dan ada beberapa fitur yang di tambahkan. 
