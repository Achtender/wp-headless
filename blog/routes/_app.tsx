import { AppProps } from "fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html lang="en-NL">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests; img-src 'self' mhs.achtender.eu;" />
 
        <title>My Fresh Project</title>
        <meta name="description" content="An example application showcasing a performant frontend with a WordPress-based content management system."/>

        {/* <style>${Deno.readTextFileSync("./_fresh/static/styles.gen.css")}</style> */}
        <style dangerouslySetInnerHTML={{__html:Deno.readTextFileSync("./_fresh/static/styles.css")}}></style>
        {/* <link rel="stylesheet" href="/styles.css" /> */}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
