// Copyright 2022 the Deno authors. All rights reserved. MIT license.

// import { Options } from "fresh/plugins/twind.ts";

// export default {
//   selfURL: import.meta.url,
// } as Options;


import { type Config } from "tailwindcss";

export default {
  selfURL: import.meta.url,
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;