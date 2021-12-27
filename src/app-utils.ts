import { reduce } from '@bett3r-dev/server-utils';
import { CartModel } from '@bett3r-dev/pv2-example-domain';

export * from '@bett3r-dev/server-utils'

export const getCartTotal = (cart: CartModel) => reduce((total, item) => total + (item.quantity * item.productInfo.price), 0, Object.values(cart.products));