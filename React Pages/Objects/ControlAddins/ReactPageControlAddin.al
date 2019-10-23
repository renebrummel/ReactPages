controladdin ReactPageControlAddinRED
{
    Scripts =
        'https://unpkg.com/react@16/umd/react.development.js',
        'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
        'Objects/Scripts/reactPageFunction.js';
    StartupScript = 'Objects/Scripts/reactPageStart.js';

    StyleSheets = 'Objects/Css/reactPage.css';

    HorizontalStretch = true;
    HorizontalShrink = true;
    MinimumWidth = 250;

    procedure InitControls(FieldList: JsonArray; Data: JsonArray; PageActions: JsonArray);
    procedure ValidationResult(FieldKey: Integer; Data: JsonArray; LastError: Text);
    event ControlReady();
    event ValidateField(FieldKey: Integer; Data: JsonArray);
    event HandleAction(Data: JsonArray; PageAction: JsonObject);
    event UpdateRecord(Data: JsonArray);
}