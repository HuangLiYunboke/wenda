import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component{
  render(){
    console.log(this.props.quest);
    return(
      <div>
      <h3>Title: {this.props.quest.title}</h3>
      <hr />
      <h4>{this.props.quest.content}</h4>
      <hr />
      </div>
    )
  }
}
class Item extends React.Component{
  render(){
    if(this.props.title){
    return (
      <div>
      { this.props.title.map(function (question) {
        return <App key={question._id} quest={question} />
      })}
      </div>
    )
  }else {
    return (
      <div> </div>
    )
  }
  }
}

class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: ''}

  }
  componentWillMount(){
    $.get('/api/list', (data) => (
      this.setState({
        data: data
      })
    ))
  }


  render(){
    return (
      <Item title = {this.state.data} />
    )
  }
}


ReactDOM.render(
  <Hello />,
  document.getElementById('root')
)
