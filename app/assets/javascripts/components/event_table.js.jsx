var EventTable = React.createClass({
  render(){

    let events = []
    this.props.events.map((event)=>{
      events.push(
        <Event key={event.id} event={event} />
      )
    })


    return(
      <table className="table table-stripd">
        <thead>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-2"> Date </th>
            <th className="col-md-3"> Place </th>
            <th className="col-md-4"> Description </th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
})
