import Client from 'shopify-buy';

// ============================================================
// CONFIGURA AQUÍ TUS DATOS DE SHOPIFY
// ============================================================
// 1. Ve a tu admin de Shopify → Settings → Apps and sales channels
// 2. Click "Develop apps" → Create an app
// 3. En "API credentials" → Configure Storefront API scopes
//    - Marca: unauthenticated_read_product_listings
//    - Marca: unauthenticated_write_checkouts
//    - Marca: unauthenticated_read_checkouts
// 4. Click "Install app"
// 5. Copia el "Storefront API access token"
// 6. Tu domain es: tu-tienda.myshopify.com
// ============================================================

const SHOPIFY_DOMAIN = 'TU-TIENDA.myshopify.com';      // ← Cambia esto
const STOREFRONT_TOKEN = 'TU-STOREFRONT-ACCESS-TOKEN';  // ← Cambia esto

const client = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: STOREFRONT_TOKEN,
  apiVersion: '2024-01',
});

export async function createCheckout(variantId: string, quantity = 1) {
  const checkout = await client.checkout.create();
  const lineItems = [{ variantId, quantity }];
  const updatedCheckout = await client.checkout.addLineItems(
    checkout.id,
    lineItems,
  );
  return updatedCheckout;
}

export async function redirectToCheckout(variantId: string, quantity = 1) {
  const checkout = await createCheckout(variantId, quantity);
  window.location.href = (checkout as unknown as { webUrl: string }).webUrl;
}

export async function fetchProducts() {
  return client.product.fetchAll();
}

export async function fetchProduct(productId: string) {
  return client.product.fetch(productId);
}

export default client;
