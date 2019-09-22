'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WarehouseShipment = function () {
  var FieldList = function (_React$Component) {
    _inherits(FieldList, _React$Component);

    function FieldList(props) {
      _classCallCheck(this, FieldList);

      var _this = _possibleConstructorReturn(this, (FieldList.__proto__ || Object.getPrototypeOf(FieldList)).call(this, props));

      _this.handleChange = function (e) {
        if (["fieldcaption", "fieldvalue"].includes(e.target.className)) {
          var fields = [].concat(_toConsumableArray(_this.state.fields));
          fields[e.target.dataset.id][e.target.className] = e.target.value;
          _this.setState({ fields: fields });
        } else {
          _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
      };

      _this.handleSubmit = function (e) {
        e.preventDefault();
      };

      _this.state = {
        fields: Object.values(_this.props.object)
      };
      return _this;
    }

    _createClass(FieldList, [{
      key: "handleClick",
      value: function handleClick() {
        // this.setState({ clicked: !clicked});
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("HandleClick", [this.state.fields]);
        // alert(this.state.fields);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var fields = this.state.fields;

        var fieldsForm = fields.map(function (val, idx) {
          var fieldId = 'field-${idx}',
              fieldvalueId = 'fieldvalue-${idx}';
          return React.createElement(
            "form",
            { onSubmit: _this2.handleSubmit, onChange: _this2.handleChange },
            React.createElement(
              "label",
              { htmlFor: fieldvalueId },
              fields[idx].fieldcaption
            ),
            React.createElement("input", {
              type: "text",
              name: fieldvalueId,
              "data-id": idx,
              id: fieldvalueId,
              className: "fieldvalue",
              value: fields[idx].fieldvalue
            }),
            React.createElement(
              "button",
              { onClick: function onClick() {
                  return _this2.handleClick();
                } },
              fields[idx].fieldvalue
            ),
            React.createElement("input", { type: "submit", value: "Submit" })
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
          React.createElement(
            "div",
            null,
            fieldsForm
          )
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