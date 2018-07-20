export const UserSaysHello = (name) => {
    return {
        type: 'SayHelloAction',
        payload: name
    };
};
export const UserSaysGoodbye = (name) => {
    return {
        type: 'SayGoodbyeAction',
        payload: name
    };
};