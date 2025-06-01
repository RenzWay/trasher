import { getRoute } from "./url-parse";
import routes from "../routes/route";

export default class App {
  constructor({ content }) {
    this.content = content;
  }
  async renderPage() {
    const urlApp = getRoute();
    const routesPage = routes[urlApp];

    if (!routesPage) {
      this.content.innerHTML = "<h2>404 - Page Not Found</h2>";
      return;
    }

    const page = new routesPage();
    const content = this.content;

    document.startViewTransition(async () => {
      content.innerHTML = await page.render();
      await page.afterRender();
    });
  }
}
