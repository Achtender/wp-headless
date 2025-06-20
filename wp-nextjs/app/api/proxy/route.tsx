const baseUrl = process.env.WORDPRESS_URL;
const credentials = process.env.WORDPRESS_API_BASIC_AUTH; ;

if (!baseUrl) {
  throw new Error('WORDPRESS_URL environment variable is not defined');
}

if (!credentials) {
  throw new Error('WORDPRESS_API_BASIC_AUTH environment variable is not defined');
}

// TODO(@all): Proxy wordpress request for client side updates
