controladdin WhseShpmtControlAddin
{
    Scripts =
        'https://unpkg.com/react@16/umd/react.development.js',
        'https://unpkg.com/react-dom@16/umd/react-dom.development.js';
    StartupScript = 'Objects/Scripts/warehouseShipment.js';

    StyleSheets = 'Objects/Css/warehouseShipment.css';

    VerticalStretch = true;
    VerticalShrink = true;
    MinimumHeight = 250;

    HorizontalStretch = true;
    HorizontalShrink = true;
    MinimumWidth = 250;

    procedure InitControls(Data: JsonArray);
    procedure ValidationResult(Object: JsonObject);
    event ControlReady();
    event ValidateField(Object: JsonObject);
    event UpdateObject(Object: JsonObject);
    event HandleClick(Object: JsonObject);
}