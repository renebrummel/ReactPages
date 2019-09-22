controladdin WhseShpmtControlAddinRED
{
    Scripts =
        'https://unpkg.com/react@16/umd/react.development.js',
        'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
        'Objects/Scripts/warehouseShipmentFunction.js';
    StartupScript = 'Objects/Scripts/start.js';

    StyleSheets = 'Objects/Css/warehouseShipment.css';

    VerticalStretch = true;
    VerticalShrink = true;
    MinimumHeight = 250;

    HorizontalStretch = true;
    HorizontalShrink = true;
    MinimumWidth = 250;

    procedure InitControls(Data: JsonArray);
    procedure ValidationResult(Object: JsonArray);
    event ControlReady();
    event ValidateField(Object: JsonArray);
    event HandleClick(Object: JsonArray);
    event UpdateRecord(Object: JsonArray);
}