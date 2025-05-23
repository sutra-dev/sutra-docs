import * as OpenAPI from "fumadocs-openapi";
import { rimraf } from "rimraf";

export async function generateDocs() {
  await rimraf("../content/docs/openai");

  await Promise.all([
    OpenAPI.generateFiles({
      input: ["./sutra-api-service.yaml"],
      output: "../content/docs/openai",
      per: "operation",
    }),
  ]);
}
