<template>
  <v-app>
    <h1>CLEAN CODE</h1>

    <h3>3 Hal yang dipelajari di clean code</h3>

    <h4>1. Apa itu CLEAN CODE</h4>
    <p>
      Clean code adalah istilah untuk kod yang mudah dibaca, difahami dan diubah
      oleh programmer.
    </p>

    2. Karaktristik Clean code 3. Refactoring

    <h4>2. KARAKTERISTIK CLEAN CODE</h4>

    <p>
      Ada 9 karakteristik clean code yaitu : 1. Penamaan mudah dipahami 2. Mudah
      dieja dan dicari 3. Singkat namun mendeskripsikan konteks 4. Konsisten 5.
      Hindari penambahan konteks yang tidak perlu 6. komentar 7. Funtion 8.
      Gunakan konveksi 9. Formatting
    </p>

    <h4>
      CLEAN CODE PRINCIPLE KISS(Keep It So Simple) yaitu menghindari membuat
      fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek
      fungsi C, dst. DRY(Don't Repeat Yourself) yaitu duplikasi code terjadi
      karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi
      yang dapat digunakan secara berulang-ulang.
    </h4>

    <h4>3. REFACTORING</h4>

    <p>
      Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara
      mengubah struktur internal tanpa mengubah prilaku eksternal. prinsip KISS
      dan DRY bisa dicapai dengan cara refactor.
    </p>

    <h3>TASK</h3>
    <p>
      Task kali ini kita belajar tentang clean code yang dimana kita diberi
      challenge untuk mengidentifikasi berapa bnyak kekurangan dalam penulisan
      code, pada bagian mana saja dan apa alasan dari kekurangan tersebut. dan
      juga challenge yang ke 2 kita diperintahkan untuk mengubah penulisan
      sebuah code menjadi lebih rapi dan lebih terbaca.
    </p>
    <div>
      <v-img src="../assets/CleanCode.png" />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "section08Compt",
  setup() {},
};
</script>
