import React from "react";
import { connect } from 'react-redux';

class RenderPosts extends React.Component{
  render(){
    const { loading, data, error } = this.props;
    if (!loading && data.length > 0) {
      return (
       <ul>
         <p>{`Última atualização: ${new Date()}`}</p>
         {
           data.map((post)=>(
             <li key={post.data.title}>{post.data.title}</li>
           ))
         }
       </ul>
      )
    }
    if (loading) {
      return (
        <p>Carregando...</p>
      )
    }
    if (error) {
      return (
        <p>{error}</p>
      )
    }
    else return(
      <p>Selecione uma opção</p>
    )

  }
}

const mapStateToProps = (state) => ({
  loading: state.reeditReducer.loading,
  data: state.reeditReducer.data,
  error: state.reeditReducer.error,
})

export default connect(mapStateToProps)(RenderPosts)