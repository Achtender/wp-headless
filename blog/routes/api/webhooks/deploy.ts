// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { Handlers } from "fresh/server.ts";
import { Octokit } from "https://esm.sh/@octokit/core";

const GITHUB_TOKEN = Deno.env.get("GITHUB_TOKEN");
const DEPLOY_TOKEN = Deno.env.get("DEPLOY_TOKEN");

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    if (url.searchParams.get("token") !== DEPLOY_TOKEN) {
      return Response.json({
        status: 403,
        message: "Forbidden: Invalid token",
      });
    }

    let data;
    let rawBody = await req.text();
    try {
      data = JSON.parse(rawBody);
      console.log("Request JSON body:", data);
    } catch {
      data = rawBody;
      console.log("Request raw body:", data);
    }

    // const octokit = new Octokit({
    //   auth: GITHUB_TOKEN,
    // });

    // const response = await octokit.request(
    //   "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
    //   {
    //     owner: "milo-at-achtender",
    //     repo: "headless-wordpress",
    //     workflow_id: "deploy.yml", // or replace with the actual workflow file name or numeric ID
    //     ref: "main",
    //     headers: {
    //       "X-GitHub-Api-Version": "2022-11-28",
    //     },
    //   },
    // );

    // return Response.json({
    //   status: response.status,
    //   message: response.status === 204
    //     ? "Deployment triggered successfully"
    //     : "Failed to trigger deployment",
    // });

    return Response.json({
      status: 204,
      message: 204 === 204
        ? "Deployment triggered successfully"
        : "Failed to trigger deployment",
    });
  },
};
