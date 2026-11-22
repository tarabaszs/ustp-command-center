# USTP Command Center — PPD Sik

Dashboard web statik yang responsif untuk data Guru Admin DELIMa. Ia menggunakan 33 rekod daripada tab `ADMIN DELIMA SEK` dalam workbook sumber dan tidak menggunakan data GPICT atau GPM.

## Cara guna

1. Buka `index.html` dalam pelayar web moden, atau hoskan keseluruhan folder ini pada pelayan web statik.
2. Pilih **Guru Admin DELIMa** pada navigasi untuk mencari dan menapis senarai mengikut nama, sekolah, kod sekolah atau gred.
3. Klik rekod guru untuk paparan butiran operasi.

## Privasi

Nombor kad pengenalan, telefon dan e-mel individu tidak dimasukkan ke dalam aplikasi. Paparan profil hanya menunjukkan nama, sekolah, kod sekolah, gred dan pengalaman.

## Integrasi Google Sheets kemudian

Fail `app.js` menggunakan satu tatasusunan data sebagai lapisan sumber. Gantikannya dengan fungsi pengambilan data daripada Google Sheets yang diautentik dan dipastikan kebenarannya, kemudian petakan hanya medan operasi yang diluluskan. Integrasi langsung belum dilaksanakan dalam versi ini.

## Terbitkan untuk akses awam

Folder ini sedia diterbitkan sebagai laman statik. Untuk GitHub Pages, cipta repositori baharu, muat naik keseluruhan kandungan folder ini ke akar repositori, kemudian aktifkan **Settings → Pages → Deploy from a branch → main / root**. GitHub akan menyediakan alamat laman awam selepas penerbitan selesai.

Sebelum menerbitkan kemas kini pada masa hadapan, semak bahawa hanya medan berikut dibawa masuk: nama guru, sekolah, kod sekolah, gred, dan pengalaman. Jangan masukkan telefon, kad pengenalan atau e-mel individu ke dalam `app.js`.
