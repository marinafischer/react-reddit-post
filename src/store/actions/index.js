export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVED_POST = 'RECEIVED_POST';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const requestPost = (subreddit) => ({
  type: REQUEST_POST,
  subreddit
});

const receivedPost = (data) => ({
  type: RECEIVED_POST,
  data: data
});

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  error
});

export function fetchPosts(subreddit){
  return(dispatch)=>{
    dispatch(requestPost(subreddit));
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response)=>response.json())
    .then((data)=>dispatch(receivedPost(data.data.children)))
    .catch((error)=>dispatch(failedRequest(error.message)))
  };
};