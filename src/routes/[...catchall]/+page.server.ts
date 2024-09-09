import {
  fetchOneEntry,
  getBuilderSearchParams,
  fetchEntries,
} from "@builder.io/sdk-svelte";
import { BUILDER_PUBLIC_API_KEY } from "../../apiKey";

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  // fetch your Builder content
  const content = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_PUBLIC_API_KEY,
    options: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: event.url.pathname || "/",
    },
    enrich: true,
  });

  const entries = await fetchEntries({
    model: "page",
    apiKey: BUILDER_PUBLIC_API_KEY,
    enrich: true,
    query: {
      id: "5af62fa81a1b4c9b907e6411189228eb",
      data: {
        score: {$eq: 99},
      },
    },
  });
  console.log(".......", entries);

  return { content };
}
