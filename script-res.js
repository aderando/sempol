function formatRupiah(angka) {
    var formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    });
    return formatter.format(angka).replace(/,00/g, '').replace('Rp', '');
}

function displayInputs() {
    const saldo = document.getElementById("saldo").value;
    const username = document.getElementById("username").value;
    const pasaranya = document.getElementById("pasaranya").value;
    const periode = document.getElementById("periode").value;
    const tanggalnya = document.getElementById("tanggalnya").value;
    const tebakan = document.getElementById("tebakan").value;

    document.getElementById("outputSaldo").textContent = `${formatRupiah(saldo)}`;
    document.getElementById("outputUsername").textContent = `${username}`;
    document.getElementById("outputPasaran").textContent = `${pasaranya}`;
    document.getElementById("outputPasaran2").textContent = `${pasaranya}`;
    document.getElementById("outputPeriode").textContent = `${periode}`;
    document.getElementById("outputTanggal").textContent = `${tanggalnya}`;
    document.getElementById("outputTebakan").textContent = `${tebakan}`;
}

function multiply() {
    const taruhan = document.getElementById("taruhan").value;
    const jumlah = document.getElementById("jumlah").value;
    const prize = document.getElementById("prize").value;

    const total = taruhan * jumlah * prize;

    document.getElementById("outputTaruhan").textContent = `${formatRupiah(taruhan)}`;
    document.getElementById("outputJumlah").textContent = `${jumlah}`;
    document.getElementById("outputPrize").textContent = `${prize}`;
    document.getElementById("totalOutput").textContent = `${formatRupiah(total)}`;
    document.getElementById("totalOutput2").textContent = `${formatRupiah(total)}`;
}

// apasih
let raiseVisible = false;

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.keyCode === 190) {
    if (raiseVisible) {
      document.getElementById('raise').style.display = 'none';
    } else {
      document.getElementById('raise').style.display = 'block';
    }
    raiseVisible = !raiseVisible;
  }
});
