// Problem 1 - Analysis

// ada  kekurangan
// 1. pada bagian class user kurang ditambahkan constructur
// 2. pada bagian var seharusnya diganti menjadi "this"
// 3. pada bagian class userservices kurang ditambahkan constructur
// 4. 


// Problem 2 - Write
class Kendaraan {
    constructor() {
      this.roda = 0;
      this.kecepatan = 0;
    }
  }
  
  class Mobil extends Kendaraan {
    constructor(roda, kecepatan) {
      super(roda, kecepatan);
    }
  
    berjalan() {
      this.tambahKecepatan(10);
    }
  
    tambahKecepatan(kecepatanBaru) {
      this.kecepatan = this.kecepatan + kecepatanBaru;
    }
  }
  
  // void main(){
  // const mobil = new Mobil();
  // mobil.berjalan();
  // mobil.berjalan();
  // }
  
  // console.log(mobil.kecepatan);
  
  function main() {
    const mobil = new Mobil();
    mobil.berjalan();
    mobil.berjalan();
    mobil.berjalan();
  
    console.log("TEST");
    console.log(mobil.kecepatan);
  }
  
  main();

    mobillamban = new Mobil();
    mobillamban.berjalan();
  