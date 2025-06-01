import App from "./app/app";
import "../css/style.css";

document.addEventListener("DOMContentLoaded", async function () {
  const content = document.getElementById("mainContent");
  const app = new App({ content });

  await app.renderPage();

  window.addEventListener("hashchange", async function () {
    await app.renderPage();
  });
});
