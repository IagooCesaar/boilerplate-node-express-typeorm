import { version } from "../../package.json";

module.exports = {
  openapi: "3.0.1",
  info: {
    title: "Example API",
    description: "API de exemplo",
    version,
    contact: {
      name: "Iago César",
      email: "iagocesar.nogueira@gmail.com",
    },
  },
};
