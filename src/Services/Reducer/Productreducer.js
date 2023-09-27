

const initiale = {


    products: [],
    cartproducts: [],


}

const Productreducer = (state = initiale, action) => {


    switch (action.type) {



        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case 'SINGLE_PRODUCT':
            return {
                ...state,
                cartproducts: action.payload
            }
        case 'ALL_PRODUCT':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state

    }


}

export default Productreducer
