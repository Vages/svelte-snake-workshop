import { Model, Server } from "miragejs";
import { addCaos } from "miragejs-caos";

const ServerWithCaos = addCaos(Server, { level: "medium" });
export function makeServer({ environment = "development" } = {}) {
  return new ServerWithCaos({
    environment,

    models: {
      score: Model,
    },

    seeds(server) {
      server.create("score", { name: "Alice", score: 10 });
      server.create("score", { name: "Bob", score: 42 });
    },

    routes() {
      this.namespace = "api";

      this.get("/scores", (schema) => {
        return schema.scores.all().sort((a, b) => b.score - a.score);
      });

      this.post("/scores", (schema, request) => {
        schema.scores.create(request.requestBody);
      });
    },
  });
}
