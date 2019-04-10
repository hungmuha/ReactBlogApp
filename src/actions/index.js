import jsonPlaceholder from '../apis/jsonPlaceholder';

// using redux thunk to be able to return a function
export const fetchPosts = () => async (dispatch)=> {
    const response = await jsonPlaceholder.get('/post');

    dispatch({type: 'FETCH_POSTS', payload: response})
}; 
