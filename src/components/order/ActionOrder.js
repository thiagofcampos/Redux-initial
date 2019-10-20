export function addToBOx(ingredient) {
    return {
        type: 'ADD_TO_BOX',
        ingredient,
    };
}

export function removeFromBOx(id) {
    return {
        type: 'REMOVE_FROM_BOX',
        id,
    };
}
