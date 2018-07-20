
const initState = {
    greetingMessage: 'No greeting :S'
};

const greetingReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SayHelloAction':
            return {
                ...state,
                greetingMessage: `Hello: ${action.payload} :)`
            };
        case 'SayGoodbyeAction':
            return {
                ...state,
                greetingMessage: `Bye: ${action.payload} :(`
            }
        default:
            return state;
    }
};


export default greetingReducer;