import Swal from "sweetalert2";

export default class HomePage {
  async render() {
    return `
      <section class="main-container">
        <div id="containerConfess">
          <h1>Halo bisakah aku menanyakan sesuatu?</h1>
          <h1>Jujur aku suka sama kamu, gimana menurutmu??</h1>
          <p id="message"></p>

          <div id="buttonContainer">
            <button id="yesButton">Yes!!!</button>
            <button id="noButton">No😓</button>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    await this.alertShow();

    const containerConfess = document.getElementById("containerConfess");

    const messageElement = document.getElementById("message");
    const yesBtn = document.getElementById("yesButton");
    const noBtn = document.getElementById("noButton");

    const messages = [
      "Jangan dong, pilih Yes aja!",
      "Yakin nggak mau? Coba Yes deh!",
      "Masa sih nggak mau? Tekan Yes dong!",
      "Plis jangan tekan No, tekan Yes aja!",
      "Kasihan aku dong, pilih Yes ya!",
      "No nggak berlaku di sini, Yes aja!",
      "Ayo, jangan ragu, tekan Yes!",
      "Cinta nggak butuh penolakan, tekan Yes!",
      "No? Yakin? Tekan Yes lebih seru!",
      "Yes itu pilihan terbaik!",
      "No itu dosa di sini, Yes dong!",
      "Jangan bikin aku sedih, pilih Yes ya!",
      "No? Waduh, jangan gitu dong!",
      "Yes itu jalan ninja kita!",
      "No? Nanti aku nangis lho...",
      "Pilih Yes, biar aku bahagia!",
      "No? Coba pikirin lagi deh!",
      "Yes aja, biar dunia damai!",
      "No? Waduh, jangan tega dong!",
      "Yes, biar aku bisa tidur nyenyak!",
      "No? Aku nggak siap mental!",
      "Yes, biar makin seru ceritanya!",
      "No? Nanti aku curhat ke tembok!",
      "Yes, biar aku bisa senyum hari ini!",
      "No? Waduh, jangan-jangan kamu bercanda?",
      "Yes dong, masa nggak mau?",
      "No? Aku bakal galau seminggu!",
      "Yes, biar aku bisa traktir es krim!",
      "No? Waduh, aku nggak kuat!",
      "Yes, biar aku semangat terus!",
    ];

    yesBtn.addEventListener("click", this.yesHandler);

    noBtn.addEventListener("mouseenter", function () {
      const maxX = containerConfess.offsetWidth - noBtn.offsetWidth;
      const maxY = containerConfess.offsetHeight - noBtn.offsetHeight;
      const minX = 10;
      const minY = 10;
      const randX = Math.random() * (maxX - minX) + minX;
      const randY = Math.random() * (maxY - minY) + minY;

      messageElement.style.display = "block";
      // Tambahkan animasi shake-pop sebelum pindah
      noBtn.classList.add("shake-pop");
      setTimeout(() => {
        noBtn.classList.remove("shake-pop");
        noBtn.style.position = "absolute";
        noBtn.style.left = `${randX}px`;
        noBtn.style.top = `${randY}px`;
      }, 280); // 500ms = durasi animasi
      // Tampilkan pesan random
      const idx = Math.floor(Math.random() * messages.length);
      messageElement.textContent = messages[idx];
    });

    noBtn.addEventListener("click", function () {
      const maxX = containerConfess.offsetWidth - noBtn.offsetWidth;
      const maxY = containerConfess.offsetHeight - noBtn.offsetHeight;
      const minX = 10;
      const minY = 10;
      const randX = Math.random() * (maxX - minX) + minX;
      const randY = Math.random() * (maxY - minY) + minY;

      messageElement.style.display = "block";

      noBtn.classList.add("shake-pop");
      setTimeout(() => {
        noBtn.classList.remove("shake-pop");
        noBtn.style.position = "absolute";
        noBtn.style.left = `${randX}px`;
        noBtn.style.top = `${randY}px`;
      }, 280);
      const idx = Math.floor(Math.random() * messages.length);
      messageElement.textContent = messages[idx];
    });
  }

  yesHandler() {
    Swal.fire({
      icon: "info",
      title:
        "na, aku minta maaf ya kayaknya becandaku kelewatan deh aku bener-bener minta maaf",
    }).then(() => {
      Swal.fire({
        icon: "warning",
        title: "aku ga eskpek kalo jadi kek gini",
        text: "ya sebenarnya semuanya itu rencana becandaku tapi kok jadi kayak gini gitu😅",
      }).then(() => {
        Swal.fire({
          icon: "warning",
          title: "ya kalo di maafin, ya syukurlah",
          text: "kalo ga yasudah selanjutnya bisa kamu pilih no aja",
        }).then(() => {
          Swal.fire({
            icon: "question",
            title: "bisakah aku menanyakan sesuatu?",
            text: "Apa aku boleh minta dapat kesempatan kedua? Aku ga bisa memperbaiki semua tapi gpp your choise.",
            showDenyButton: true,
            confirmButtonText: "Yes",
            denyButtonText: "No",
          }).then((result) => {
            if (result.isConfirmed) {
              location.hash = "#/question/yes";
            } else if (result.isDenied) {
              location.hash = "#/question/no";
            }
          });
        });
      });
    });
  }

  alertShow() {
    Swal.fire({
      icon: "info",
      title:
        "maaf ya terlambat soalnya ini ada pembaruan setelah ada, yaaa masalah",
      text: `seharusnya aku kasih ini pas sebelum aku buat masalah tapi sudah terlanjur dan beginilah belum sempurna tapi sudah lumayan lah updatenya karena aku lagi sakit. seharusnya ga gini beda lagi aslinya tapi ini khusus permintaan maaf ku 😅😅`,
    });
  }
}
