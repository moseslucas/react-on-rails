var EventApplication = React.createClass({
  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1> React JS App</h1>
          <p> by Moses Lucas </p>
        </div>

        <div className="row">
          <div className="col-md-12">
            <EventTable />
          </div>
        </div>
      </div>
    )
  }
})
