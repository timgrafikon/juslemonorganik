document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".btn-primary");
});

document.getElementById('formPertanyaan').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const nohp = document.getElementById('nohp').value;
    const alamat = document.getElementById('alamat').value;
    const pesanan = document.getElementById('pesanan').value;

    // Format pesan dengan spasi dan baris baru
    const pesan = `Halo kak, saya mau pesan Lemon Gold.%0A`+
                  `%0A` +
                  `Nama : ${nama}.%0A` + 
                  `Nomor HP : ${nohp}%0A` +
                  `Alamat : ${alamat}%0A` +
                  `Jumlah Pesanan : ${pesanan} Lemon Gold.%0A`+
                  `%0A`+
                  `Tolong bantu cek ongkir ya kak`;

    // Nomor WhatsApp tujuan
    const nomorWA = '6288227666104';

    // Redirect ke WhatsApp
    const url = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(url, '_blank');
});
