#!/usr/bin/env -S deno run -A --watch=static/,routes/
// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import dev from "fresh/dev.ts";
import "std/dotenv/load.ts";

import globalStylePlugin from "utils/global_style_plugin.ts";

import { defineConfig } from "fresh/server.ts";
import tailwind from "fresh/plugins/tailwind.ts";

await dev(import.meta.url, 'main.ts', defineConfig({
  plugins: [tailwind(), globalStylePlugin],
}));
