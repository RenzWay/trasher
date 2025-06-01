import Swal from "sweetalert2";
import { loadFull } from "tsparticles";
import confetti from "canvas-confetti";

export default class QuestionPage {
  static particlesLoaded = false;

  async render() {
    return `
        <section>
        </section>
    `;
  }

  async afterRender() {
    const styleElement = document.createElement("style");
    styleElement.textContent = await this.style();
    document.head.appendChild(styleElement);

    const mainEle = document.querySelector("section");

    // Pastikan hanya ada satu #tsparticles
    let tsDiv = document.getElementById("tsparticles");
    if (!tsDiv) {
      tsDiv = document.createElement("div");
      tsDiv.id = "tsparticles";
      tsDiv.style.position = "fixed";
      tsDiv.style.top = 0;
      tsDiv.style.left = 0;
      tsDiv.style.width = "100vw";
      tsDiv.style.height = "100vh";
      tsDiv.style.zIndex = 100;
      tsDiv.style.pointerEvents = "none";
      document.body.appendChild(tsDiv);
    }

    // Destroy particle lama
    if (window.tsParticles && window.tsParticles.dom().length) {
      window.tsParticles.dom().forEach((inst) => inst.destroy());
    }

    // Pastikan loadFull hanya sekali
    if (!QuestionPage.particlesLoaded) {
      if (window.tsParticles) {
        await loadFull(window.tsParticles);
        QuestionPage.particlesLoaded = true;
        // console.log('tsParticles loaded!');
      } else {
        console.error("window.tsParticles tidak ditemukan!");
      }
    }

    if (location.hash === "#/question/yes") {
      mainEle.innerHTML = await this.yesRender();
      this.showYesParticles();
    } else if (location.hash === "#/question/no") {
      mainEle.innerHTML = await this.noRender();
      this.showNoParticles();
    }
  }

  showYesParticles() {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
    });
    window.tsParticles.load("tsparticles", {
      particles: {
        number: { value: 30 },
        shape: { type: "heart" },
        color: { value: ["#ff6e7f", "#fcb69f", "#f67280", "#d72660"] },
        size: { value: 18, random: { enable: true, minimumValue: 8 } },
        opacity: { value: 0.7 },
        move: {
          enable: true,
          speed: 2,
          direction: "bottom",
          outModes: { default: "out" },
        },
      },
      background: { color: "transparent" },
    });
  }

  showNoParticles() {
    // Debug log
    // console.log('showNoParticles dipanggil');
    if (!window.tsParticles) {
      console.error("window.tsParticles tidak ditemukan di showNoParticles!");
      return;
    }
    window.tsParticles.load("tsparticles", {
      particles: {
        number: { value: 20 },
        shape: { type: "heart" },
        color: { value: ["#cccccc", "#eeeeee", "#bdbdbd", "#f67280"] },
        size: { value: 16, random: { enable: true, minimumValue: 7 } },
        opacity: { value: 0.5 },
        move: {
          enable: true,
          speed: 1.2,
          direction: "bottom",
          outModes: { default: "out" },
        },
      },
      background: { color: "transparent" },
    });
  }

  async yesRender() {
    return `
      <section>
        <article>
          <h2>🎉 Selamat! 🎉</h2>
          <p style="font-size:1.2em;">Kamu sudah memberi kesempatan kedua!<br>
          Semoga semakin seru dan penuh warna 💖</p>
          <div style="font-size:2.5em; margin: 18px 0;">💌🎀💌</div>
          <p>Terima kasih sudah percaya.</p>
          <blockquote>“Jika aku adalah orang terburuk yang pernah kamu kenal, aku minta maaf ya”</blockquote>
          <div class="notif-ss">Jangan lupa screenshot halaman ini sebagai bukti ya! 📸</div>
        </article>
      </section>
    `;
  }

  async noRender() {
    return `
    <section>
        <article>
          <h2>😢 Yah, ditolak...</h2>
          <p style="font-size:1.1em;">Gapapa kok, aku tetap senang bisa kenal kamu.<br>
          Semoga kamu selalu bahagia ya! 🌻</p>
          <div style="font-size:2em; margin: 16px 0;">💔</div>
          <p>Kapan-kapan bisa dilanjut ya, jangan lupa senyum 😊</p>
          <blockquote>“Jika aku adalah orang terburuk yang pernah kamu kenal, aku minta maaf ya”</blockquote>
          <div class="notif-ss">Jangan lupa screenshot halaman ini, sebagai bukti ya! 📸</div>
        </article>
    </section>
    `;
  }

  style() {
    return `
      section {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: none;
        padding: 0;
      }
      article {
        background: rgba(255,255,255,0.93);
        border-radius: 22px;
        box-shadow: 0 6px 24px 0 rgba(238, 156, 167, 0.18);
        border: 2px solid #ee9ca7;
        padding: 36px 24px 28px 24px;
        min-width: 260px;
        max-width: 400px;
        text-align: center;
        margin: 0 auto;
        font-family: 'Segoe UI', 'Comic Sans MS', cursive, Arial, sans-serif;
      }
      article h2 {
        color: #d72660;
        font-family: 'Segoe Script', 'Comic Sans MS', cursive, sans-serif;
        margin-bottom: 16px;
        font-size: 1.5em;
      }
      article p {
        color: #f67280;
        margin: 10px 0 0 0;
        font-size: 1.08em;
        font-family: 'Segoe UI', Arial, sans-serif;
      }
      article .notif-ss {
        margin-top: 18px;
        background: #fffbe7;
        color: #d72660;
        border-radius: 12px;
        padding: 10px 16px;
        font-size: 1em;
        font-style: italic;
        box-shadow: 0 2px 8px #f6728022;
        border: 1.5px dashed #fcb69f;
        display: inline-block;
      }
      @media (max-width: 600px) {
        article {
          min-width: unset;
          max-width: 98vw;
          padding: 18px 4px 14px 4px;
        }
        article h2 {
          font-size: 1.1em;
        }
        article p {
          font-size: 1em;
        }
      }
    `;
  }
}
