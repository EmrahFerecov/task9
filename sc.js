class Kitablar {
    constructor(ad, yazar, il, qiymet) {
      this.ad = ad;
      this.yazar = yazar;
      this.il = il;
      this.qiymet = qiymet;
    }
    Qiymet(endirimFaizi) {
        const endirimQiymeti = this.qiymet - (this.qiymet * (endirimFaizi / 100));
        console.log(`
          Kitab ad: ${this.ad}
          Yazar ad: ${this.yazar}
          Yazildiği il: ${this.il}
          Normal qiymet: $${this.qiymet}
          Endirim qiymeti: $${this.endirimQiymeti}
        `);
        const kitab1 = yeni Kitablar("Etiraf", "Tolstoy", 2015, 20.0);
      kitab1.Qiymet(10);
    }
      }
     