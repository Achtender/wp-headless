// Copyright 2022 the Deno authors. All rights reserved. MIT license.
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "fresh/server.ts";
import manifest from "./fresh.gen.ts";
import "std/dotenv/load.ts";

import globalStylePlugin from "utils/global_style_plugin.ts";

import { defineConfig } from "fresh/server.ts";
import tailwind from "fresh/plugins/tailwind.ts";

await start(manifest, defineConfig({
  plugins: [tailwind(), globalStylePlugin],
}));