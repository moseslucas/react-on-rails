class Event extends React.Component {
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.ProptTypes.string,
    place: React.ProptTypes.string,
    description: React.ProptTypes.string
  }

  render () {
    var event = this.props.event
    return(
      <tr>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
      </tr>
    )
  }
}
