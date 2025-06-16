// Copyright 2022 the Deno authors. All rights reserved. MIT license.

import { Handlers } from "fresh/server.ts";
import { gql, request } from 'graphql-request'

export const handler: Handlers = {
  async GET(_req) {
    const data = await request('https://mhs.achtender.eu/wp-headless/wp-graphql/', gql`
        query {
            generalSettings {
                title
                description
            }
        }
    `)
    // const data = await request('https://mhs.achtender.eu/wp-headless/wp-graphql/', gql`
    //     query {
    //         page(id: "home" idType: URI) {
    //             title
    //             description
    //         }
    //     }
    // `)

    return Response.json(data);
  },
};
