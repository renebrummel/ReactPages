'use strict';

var WarehouseShipment = (function() {
  class FieldList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: Object.values(this.props.object),
      }
    }
  
    handleChange = (e) => {
      if (["fieldcaption", "fieldvalue"].includes(e.target.className) ) {
        let fields = [...this.state.fields]   
        fields[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({ fields: fields })
      } else {
        this.setState({ [e.target.name]: e.target.value })
      }
    }
  
    handleSubmit = (e) => { e.preventDefault() }
  
    handleClick() {
      // this.setState({ clicked: !clicked});
      Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("HandleClick", [this.state.fields]);
      // alert(this.state.fields);
    }
  
    render() {
      let fields = this.state.fields;
  
      const fieldsForm = fields.map((val, idx) => {
        let fieldId = 'field-${idx}', fieldvalueId = 'fieldvalue-${idx}';
        return (
          <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
            <label htmlFor={fieldvalueId}>{fields[idx].fieldcaption}</label>
            <input 
              type="text"
              name={fieldvalueId}
              data-id={idx}
              id={fieldvalueId}
              className="fieldvalue"
              value={fields[idx].fieldvalue}
            />
            <button onClick={() => this.handleClick()}>{fields[idx].fieldvalue}</button>
            <input type="submit" value="Submit" />
          </form>
        )
      });
  
      return (
        <div id="fieldList">
          <div>"Fields"</div>
          {/* <ol>{fields}</ol> */}
          {/* <table id="fieldsTable">{fields}</table> */}
          <div>{fieldsForm}</div>
        </div>
      );
    }
  }
  
  window.InitControls = function(newObject) {
    ReactDOM.render(
      <FieldList
        object={newObject}
      />,
      document.querySelector('#controlAddIn'),
    )
  }

})();
