'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WarehouseShipment = function () {
  // class LikeButton extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { liked: false };
  //   }

  //   handleClick() {
  //     this.setState({ liked: true});
  //     Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("HandleClick", [this.state]);
  //   }

  //   render() {
  //     if (this.state.liked) {
  //       return 'You liked this.';
  //     }

  //     return (
  //       <button onClick={() => this.handleClick() }>
  //         Like
  //       </button>
  //     );
  //   }
  // }
  var FieldList = function (_React$Component) {
    _inherits(FieldList, _React$Component);

    function FieldList(props) {
      _classCallCheck(this, FieldList);

      var _this = _possibleConstructorReturn(this, (FieldList.__proto__ || Object.getPrototypeOf(FieldList)).call(this, props));

      _this.state = {
        clicked: false,
        object: _this.props.object,
        objectArray: []
      };
      return _this;
    }

    _createClass(FieldList, [{
      key: "handleClick",
      value: function handleClick() {
        // this.setState({ clicked: !clicked});
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("HandleClick", [this.state.object]);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        this.state.objectArray = Object.values(this.state.object);

        var fields = this.state.objectArray.map(function (item) {
          return (
            // <li key={item} onClick={() => this.handleClick()} >
            //   <button onClick={() => this.handleClick()}>{[item.fieldcaption,item.fieldvalue].join(": ")}</button>
            // </li>
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                item.fieldcaption
              ),
              React.createElement(
                "td",
                { onClick: function onClick() {
                    return _this2.handleClick();
                  } },
                item.fieldvalue
              )
            )
          );
        });

        return React.createElement(
          "div",
          { id: "fieldList" },
          React.createElement(
            "div",
            null,
            "\"Fields\""
          ),
          React.createElement("table", { id: "fieldsTable" })
        );
      }
    }]);

    return FieldList;
  }(React.Component);

  window.InitControls = function (newObject) {
    ReactDOM.render(React.createElement(FieldList, {
      object: newObject
    }), document.querySelector('#controlAddIn'));
  };
}();