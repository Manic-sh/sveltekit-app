import adapter from "@sveltejs/adapter-vercel";

import preprocess from "svelte-preprocess";

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      isr: {
        expiration: 60, // Cache expiration in seconds (1 minute)
      },
    }),
    alias: {
      $src: "./src",
      $lib: "./src/lib",
    },
  },
};

export default config;
