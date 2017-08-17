class SearchFrom extends React.Component {

  handleSearch(){
    var query = React.DOM.findDOMNode(this.refs.query).value
    var self = this

    $.ajax({
      url: `/api/events/search`,
      data: {query: query},
      success: (data)=>{
        self.props.handleSearch(data)
      },
      error: (xhr,status,error)=>{
        alert(`Search error: ${error}`)
      }
    })
  }




  render () {
    return(
      <div>
        <input onChange={this.handleSearch}
               type="text"
               className="form-control"
               placeholder="Search Here"
               ref="query"
        />
      </div>
    )
  }
}
