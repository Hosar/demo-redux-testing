
const initState = {
    value: 'default'
};

const greetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'sayHello':
            console.log('In reducer:');
            console.log(action.payload);

            return {
                ...state,
                value: `Hello: ${action.payload}`
            };
        case 'sayGoodBye':
            return {
                ...state,
                value: `Bye: ${action.payload}`
            }
        default:
            return state;
    }
};


export default greetReducer;