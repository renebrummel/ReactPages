'use strict';

var WarehouseShipment = (function() {
  class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    handleClick() {
      this.setState({ liked: true});
      Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("HandleClick", [this.state]);
    }
  
    render() {
      if (this.state.liked) {
        return 'You liked this.';
      }
  
      return (
        <button onClick={() => this.handleClick() }>
          Like
        </button>
      );
    }
  }
  
  window.InitControls = function(object) {
    ReactDOM.render(
      <LikeButton />,
      document.querySelector('#controlAddIn'),
    )
  }

})();
