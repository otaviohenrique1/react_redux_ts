import React, { useReducer } from 'react';

interface Cart {
    products: string[];
    shiping_value?: number;
}

type CardActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppReducer: React.FC = () => {
    const cart = useReducer(
        (state: Cart, action: CardActionType) => {
            switch (action.type) {
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [...state.products, 'Produto novo']
                    };
                case 'REMOVE_PRODUCT':
                    return {
                        products: []
                    };
                default:
                    return state;
            }
        },
        {
            products: [],
            shiping_value: 0,
        }
    );
    return (
        <ul>
        </ul>
    );
}

export default AppReducer;