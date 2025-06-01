import HomePage from "../pages/home-page";
import QuestionPage from "../pages/question-page";

const routes = {
  "/": HomePage,
  "/question/:id": QuestionPage,
};

export default routes;
