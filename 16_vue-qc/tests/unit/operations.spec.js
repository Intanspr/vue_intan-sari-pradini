import { penjumlahan, pengurangan, pembagian, perkalian, rata2, sisaBagi, luasPersegi, luasLingkaran, luasKubus, volumeKubus } from "@/utils/operations.js";

// 1. Penjumlaha
describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-10, -2)).toBe(-12);
  });
  test("Penjumlahan dua bilangan non numerik", () => {
    expect(penjumlahan("1", "0")).toBe("10");
  });
});

// 2. Pengurangan
describe("Melakukan Pengurangan", () => {
    test("Pengurangan dua bilangan positif", () => {
      expect(pengurangan(6, 4)).toBe(2);
    });
    test("Pengurangan dua bilangan negatif", () => {
      expect(pengurangan(-10, -2)).toBe(-8);
    });
    test("Pengurangan dua bilangan positif dan negatif", () => {
      expect(pengurangan(9, -5)).toBe(14);
    });
  });

// 3. Pembagian
  describe("Melakukan Pembagian", () => {
    test("Pembagian dua bilangan positif", () => {
      expect(pembagian(10, 5)).toBe(2);
    });
    test("Pembagian dua bilangan negatif", () => {
      expect(pembagian(-10, -2)).toBe(5);
    });
    test("Pembagian dua bilangan positif dan negatif", () => {
      expect(pembagian(8, -4)).toBe(-2);
    });
  });

// 4. perkalian
  describe("Melakukan Perkalian", () => {
    test("Perkalian dua bilangan positif", () => {
      expect(perkalian(2, 4)).toBe(8);
    });
    test("Perkalian dua bilangan negatif", () => {
      expect(perkalian(-10, -2)).toBe(20);
    });
    test("Perkalian dua bilangan positif dan negatif", () => {
      expect(perkalian(5, -5)).toBe(-25);
    });
  });

// 5. Rata2
  describe("Melakukan rata2", () => {
    test("rata2 dua bilangan positif", () => {
      expect(rata2(9, 5)).toBe(NaN);
    });
    test("rata2 dua bilangan negatif", () => {
      expect(rata2(-9, -5)).toBe(NaN);
    });
    test("rata2 dua bilangan positif dan negatif", () => {
      expect(rata2(-9, 5)).toBe(NaN);
    });
  });

// 6. Sisi bagi
  describe("Melakukan sisaBagi", () => {
    test("sisaBagi dua bilangan positif", () => {
      expect(sisaBagi(9, 5)).toBe(4);
    });
    test("sisaBagi dua bilangan negatif", () => {
      expect(sisaBagi(-9, -5)).toBe(-4);
    });
    test("sisaBagi dua bilangan non numerik", () => {
      expect(sisaBagi("9", "-6")).toBe(3);
    });
  });

// 7. luas Persegi
  describe("Melakukan luasPersegi", () => {
    test("luasPersegi bilangan positif sisi kali sisi", () => {
      expect(luasPersegi(5, 5)).toBe(25);
    });
    test("luasPersegi bilangan negatif sisi kali sisi", () => {
      expect(luasPersegi(-5, -5)).toBe(25);
    });
    test("luasPersegi bilangan non numerik", () => {
      expect(luasPersegi("5, 5")).toBe(NaN);
    });
  });

// 8. luas Lingkaran
  describe("Melakukan luasLingkaran", () => {
    test("luasLingkaran dengan radius bilangan positif", () => {
      expect(luasLingkaran(10)).toBe(NaN);
    });
    test("luasLingkaran dengan radius bilangan negatif ", () => {
      expect(luasLingkaran(-2)).toBe(NaN);
    });
    test("luasLingkaran dengan radius string", () => {
      expect(luasLingkaran("10")).toBe(NaN);
    });
  });

// 9. luas Kubus
  describe("Melakukan luasKubus", () => {
    test("luasKubus dengan bilangan positif", () => {
      expect(luasKubus(6, 4, 4)).toBe(96);
    });
    test("luasKubus dengan bilangan negatif ", () => {
      expect(luasKubus(-6, -2, -2)).toBe(-24);
    });
    test("luasKubus dengan bilangan non numerik", () => {
      expect(luasKubus("6, 5, 5")).toBe(NaN);
    });
  });

// 10. volume Kubus
  describe("Melakukan volumeKubus", () => {
    test("volumeKubus dengan bilangan positif", () => {
      expect(volumeKubus(4, 4, 4)).toBe(64);
    });
    test("volumeKubus dengan bilangan negatif ", () => {
      expect(volumeKubus(-3, -3, -3)).toBe(-27);
    });
    test("volumeKubus dengan bilangan non numerik", () => {
      expect(volumeKubus("3, 3, 3")).toBe(NaN);
    });
  });