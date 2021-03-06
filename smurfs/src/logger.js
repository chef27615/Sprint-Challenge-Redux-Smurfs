

const logger = store => next => action => {
    console.log(action.type)
    console.log('prevState: ', store.getState());
    console.log('action: ', action);
    next(action);
    console.log('New State: ', store.getState());
} 

export default logger;