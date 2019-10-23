'use strict';

var ReactPage = (function() {
  class FieldList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        fields: Object.values(this.props.fieldList),
        data: Object.values(this.props.data),
        previousData: [],
        actions: Object.values(this.props.actions),
      }
    }

    componentDidMount(){
      window.ValidationResult = (fieldkey, data, lastError) => {
        let newData = Object.values(data);
        this.setState({data: newData});
        // this.setState({previousData: newData});
        let fields = [...this.state.fields];
        if (lastError)
        {
          fields[fieldkey].errorMessage = lastError;
        } else {
          fields[fieldkey].validated = true;
          fields[fieldkey].errorMessage = null;
        }
        this.setState({ fields : fields });
      }
    }
  
    handleChange = (e) => {
      if (["fieldcaption", "fieldvalue"].includes(e.target.className) ) {
        let newData = [...this.state.data]
        newData[e.target.dataset.id][e.target.className] = e.target.value
        this.setState({ data: newData })
      } else {
        this.setState({ [e.target.name]: e.target.value })
      }
    }
  
    handleSubmit = (e) => { e.preventDefault() }

    handleClick = (e) => {
      let actions = [...this.state.actions];
      let action = actions[e.target.dataset.id];
      if (action.handleInNav) {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("HandleAction", [this.state.data, action]);
      }
    }

    handleBlur = (e) => {
        let fields = [...this.state.fields];
        let newData = [...this.state.data];
        // Add check if data changed. If not no validation
        // if (newData[e.target.dataset.id].fieldvalue === this.state.previousData[e.target.dataset.id].fieldvalue) {
        //   alert("fieldvalue similar " + newData[e.target.dataset.id].fieldvalue + ', ' + this.state.previousData[e.target.dataset.id].fieldvalue);
        //   return;
        // }
        if (fields[e.target.dataset.id].validate && !fields[e.target.dataset.id].readOnly) {
          fields[e.target.dataset.id].validated = false;
          fields[e.target.dataset.id].errorMessage = null;
          this.setState({ fields : fields });
          Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ValidateField", [e.target.dataset.id, newData])
        }
    }
  
    render() {
      let fields = this.state.fields;
      let newData = this.state.data;
      let actions = this.state.actions;
  
      const fieldsForm = fields.map((val, idx) => {
        let fieldId = 'field-${idx}', fieldvalueId = 'fieldvalue-${idx}';
        return (
          <form onSubmit={this.handleSubmit} onChange={this.handleChange} class="fieldsForm">
            <label class="fieldsLabel" htmlFor={fieldvalueId}>{fields[idx].fieldcaption}</label>
            <input
              readOnly={!!fields[idx].readOnly}
              type="text"
              // type="date"
              name={fieldvalueId}
              data-id={idx}
              id={fieldvalueId}
              className="fieldvalue"
              value={newData[idx].fieldvalue}
              onBlur={this.handleBlur}
            />
            { fields[idx].validate && fields[idx].validated ? <div class="validated">✓</div> : null }
            { fields[idx].validate && !fields[idx].validated && !fields[idx].errorMessage ? <div class="loader" /> : null }
            { fields[idx].validate && fields[idx].errorMessage ? <div class="error">{fields[idx].errorMessage}</div> : null }
            { fields[idx].validate && fields[idx].errorMessage ? <div class="errorMessage">{fields[idx].errorMessage}</div> : null }
          </form>
        )
      });
  
      const actionsDiv = actions.map((val, idx) => {
        return (
          <button
            class="action"
            onClick={this.handleClick}
            data-id={idx}
          >
            {actions[idx].actionText}
          </button>
        )
      });
  
      return (
        <div id="reactPage">
          <div class="fieldsDiv">{fieldsForm}</div>
          <div class="actions">{actionsDiv}
          </div>
        </div>
      );
    }
  }
  
  window.InitControls = function(fieldList, data, actions) {
    ReactDOM.render(
      <FieldList
        fieldList={fieldList}
        data = {data}
        actions = {actions}
      />,
      document.querySelector('#controlAddIn'),
    )
  }

})();
