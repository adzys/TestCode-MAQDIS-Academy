const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function cekInput(nama, peran) {
  console.log("\n=============================");
  console.log("       GAME WEREWOLF         ");
  console.log("=============================");

  if (peran === "Penyihir") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Penyihir " + nama + ", kamu dapat melihat siapa yang menjadi werewolf!");
    return;
  }

  if (peran === "Guard") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Guard " + nama + ", kamu akan membantu melindungi temanmu dari serangan werewolf.");
    return;
  }

  if (peran === "Werewolf") {
    console.log("Selamat datang di Dunia Werewolf, " + nama);
    console.log("Halo Werewolf " + nama + ", Kamu akan memakan mangsa setiap malam!");
    return;
  }
}

// validasi nama 
function tanyaNama() {
  rl.question("\nMasukkan nama kamu: ", function (nama) {
    if (nama.trim() === "") {
      console.log(" ");
      console.log("Nama harus diisi!");
      tanyaNama(); 
      return;
    }
    tanyaPeran(nama.trim());
  });
}

// valiadasi peran
function tanyaPeran(nama) {
  console.log("\nPilih peran:\n1. Penyihir\n2. Guard\n3. Werewolf");
  rl.question("Pilihan: ", function (pilihan) {
    var peran = "";

    //cek input user bukan angka atau kosong
    if (isNaN(pilihan) || pilihan.trim() === "") {
      console.log(" ");
      console.log("Pilih Peranmu untuk memulai game!");
      tanyaPeran(nama); // jika user tidak input angka atau kosong, maka pertanyaan akan diulang
      return;
    }

    //cek input user bukan 1, 2, 3
    if (pilihan === "1") peran = "Penyihir";
    else if (pilihan === "2") peran = "Guard";
    else if (pilihan === "3") peran = "Werewolf";
    else {
      console.log(" ");
      console.log ("input tidak valid!");
      tanyaPeran(nama); //jika input bukan 1, 2, atau 3, maka pertanyaan akan diulang
      return;
    }

    cekInput(nama, peran);

    rl.question("\nBermain lagi? (ya/tidak): ", function (jawaban) {
      if (jawaban.toLowerCase() === "ya") tanyaNama();
      else { console.log("Sampai jumpa!"); rl.close(); }
    });
  });
}

console.log("================================");
console.log("  WELCOME TO THE WEREWOLF GAME ");
console.log("================================");
tanyaNama();