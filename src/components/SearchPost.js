import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions'

class SearchPosts extends React.Component{
  render(){
    const { dispatchFetch, subreddit } = this.props;
    return (
      <>
        <h1>
          Selected: {subreddit}
        </h1>
        <select onChange={(e)=>{dispatchFetch(e.target.value)}}>
          <option value="reactjs">react.js</option>
          <option value="frontend">frontend</option>
        </select>
        <button 
          type="button"
          onClick={()=>{dispatchFetch(subreddit)}}
        >
          Atualizar
        </button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchFetch: (reddit) => dispatch(fetchPosts(reddit))
})

const mapStateToProps = (state) => ({
  subreddit: state.reeditReducer.subreddit
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPosts)