import { AppProps } from "fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Fresh Project</title>
        <link rel="stylesheet" href="/styles.css" />
        {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests; img-src 'self' mhs.achtender.eu;" /> */}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
