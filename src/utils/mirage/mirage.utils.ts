import { createServer } from "miragejs";

export function setupMirage() {
  createServer({
    routes() {
      this.get("http://localhost:8080/posts", () => [
        {
          id: "1",
          text: "coisadsadasdasdasdasdas",
          title: "Friend and i cant join",
          upvotes: 1,
          date: "15/05/2000",
        },
      ]);
    },
  });
  return {};
}
