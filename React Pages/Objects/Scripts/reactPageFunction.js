'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactPage = function () {
  var FieldList = function (_React$Component) {
    _inherits(FieldList, _React$Component);

    function FieldList(props) {
      _classCallCheck(this, FieldList);

      var _this = _possibleConstructorReturn(this, (FieldList.__proto__ || Object.getPrototypeOf(FieldList)).call(this, props));

      _this.handleChange = function (e) {
        if (["fieldcaption", "fieldvalue"].includes(e.target.className)) {
          var newData = [].concat(_toConsumableArray(_this.state.data));
          newData[e.target.dataset.id][e.target.className] = e.target.value;
          _this.setState({ data: newData });
        } else {
          _this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
      };

      _this.handleSubmit = function (e) {
        e.preventDefault();
      };

      _this.handleClick = function (e) {
        var actions = [].concat(_toConsumableArray(_this.state.actions));
        var action = actions[e.target.dataset.id];
        if (action.handleInNav) {
          Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("HandleAction", [_this.state.data, action]);
        }
      };

      _this.handleBlur = function (e) {
        var fields = [].concat(_toConsumableArray(_this.state.fields));
        var newData = [].concat(_toConsumableArray(_this.state.data));
        // Add check if data changed. If not no validation
        // if (newData[e.target.dataset.id].fieldvalue === this.state.previousData[e.target.dataset.id].fieldvalue) {
        //   alert("fieldvalue similar " + newData[e.target.dataset.id].fieldvalue + ', ' + this.state.previousData[e.target.dataset.id].fieldvalue);
        //   return;
        // }
        if (fields[e.target.dataset.id].validate && !fields[e.target.dataset.id].readOnly) {
          fields[e.target.dataset.id].validated = false;
          fields[e.target.dataset.id].errorMessage = null;
          _this.setState({ fields: fields });
          Microsoft.Dynamics.NAV.InvokeExtensibilityMethod("ValidateField", [e.target.dataset.id, newData]);
        }
      };

      _this.state = {
        fields: Object.values(_this.props.fieldList),
        data: Object.values(_this.props.data),
        previousData: [],
        actions: Object.values(_this.props.actions),
        updated: 0
      };
      return _this;
    }

    _createClass(FieldList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        window.ValidationResult = function (fieldkey, data, lastError) {
          var newData = Object.values(data);
          _this2.setState({ data: newData });
          // this.setState({previousData: newData});
          var fields = [].concat(_toConsumableArray(_this2.state.fields));
          if (lastError) {
            fields[fieldkey].errorMessage = lastError;
          } else {
            fields[fieldkey].validated = true;
            fields[fieldkey].errorMessage = null;
          }
          _this2.setState({ fields: fields });
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var fields = this.state.fields;
        var newData = this.state.data;
        var actions = this.state.actions;

        var fieldsForm = fields.map(function (val, idx) {
          var fieldId = 'field-${idx}',
              fieldvalueId = 'fieldvalue-${idx}';
          return React.createElement(
            "form",
            { onSubmit: _this3.handleSubmit, onChange: _this3.handleChange, "class": "fieldsForm" },
            React.createElement(
              "label",
              { "class": "fieldsLabel", htmlFor: fieldvalueId },
              fields[idx].fieldcaption
            ),
            React.createElement("input", {
              readOnly: !!fields[idx].readOnly,
              type: "text"
              // type="date"
              , name: fieldvalueId,
              "data-id": idx,
              id: fieldvalueId,
              className: "fieldvalue",
              value: newData[idx].fieldvalue,
              onBlur: _this3.handleBlur
            }),
            fields[idx].validate && fields[idx].validated ? React.createElement(
              "div",
              { "class": "validated" },
              "\u2713"
            ) : null,
            fields[idx].validate && !fields[idx].validated && !fields[idx].errorMessage ? React.createElement("div", { "class": "loader" }) : null,
            fields[idx].validate && fields[idx].errorMessage ? React.createElement(
              "div",
              { "class": "error" },
              fields[idx].errorMessage
            ) : null,
            fields[idx].validate && fields[idx].errorMessage ? React.createElement(
              "div",
              { "class": "errorMessage" },
              fields[idx].errorMessage
            ) : null
          );
        });

        var actionsDiv = actions.map(function (val, idx) {
          return React.createElement(
            "button",
            {
              "class": "action",
              onClick: _this3.handleClick,
              "data-id": idx
            },
            actions[idx].actionText
          );
        });

        return React.createElement(
          "div",
          { id: "reactPage" },
          React.createElement(
            "div",
            { "class": "fieldsDiv" },
            fieldsForm
          ),
          React.createElement(
            "div",
            { "class": "actions" },
            actionsDiv
          )
        );
      }
    }]);

    return FieldList;
  }(React.Component);

  window.InitControls = function (fieldList, data, actions) {
    ReactDOM.render(React.createElement(FieldList, {
      fieldList: fieldList,
      data: data,
      actions: actions
    }), document.querySelector('#controlAddIn'));
  };
}();