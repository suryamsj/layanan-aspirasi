# Layanan Aspirasi Mahasiswa

### Tentang
Ini adalah source code website layanan aspirasi mahasiswa yang sudah support dengan PWA atau Progressive Web App.

### Teknologi
Aplikasi ini dibangun dengan menggunakan
- Bootstrap 5
- Javascript
- Sweetalert 2
- Form to Google Sheet

### Tutorial
Untuk menggunakan source code ini, pertama silahkan buka repo ini terlebih dahulu dan ikuti tutorialnya [Tutorial Form to Google Sheet](https://github.com/jamiewilson/form-to-google-sheets). Setelah selesai mengikuti tutorial, akan mendapatkan sebuah link Google Apps Script. Setelah itu, silahkan copy linknya dan buka file ***asset/js/main.js*** dan cari variabel berikut :
```Javascript
const scriptURL = 'LINK GOOGLE SCRIPT MU';
```
dan ganti dengan link yang sudah dicopy sebelumnya. Sehingga menjadi seperti ini (Cuma contoh) :
```Javascript
const scriptURL = 'https://script.google.com/macros/s/xxxxxx/exec';
```

### Donasi
<a href="https://trakteer.id/suryamsj/tip" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-3.jpg" height="40" style="border: 0px; height: 40px;" alt="Trakteer Saya"></a>
