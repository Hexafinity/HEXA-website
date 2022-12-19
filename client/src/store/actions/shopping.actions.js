export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

/**
 * Change a setting value
 * payload.name: name of the setting prop to change
 * payload.value: new value to apply
 */
export function addToCart(name, value) {
    return { type: ADD_TO_CART, name, value };
}

export function deleteFromCart(name, value) {
    return { type: DELETE_FROM_CART, name, value };
}
