controladdin ItemControlAddinRED
{
    Scripts =
        'https://unpkg.com/react@16/umd/react.development.js',
        'https://unpkg.com/react-dom@16/umd/react-dom.development.js';
    // StartupScript = 'Objects/Scripts/item.js';

    StyleSheets = 'Objects/Css/dashboards.css';

    VerticalStretch = true;
    VerticalShrink = true;
    MinimumHeight = 250;

    HorizontalStretch = true;
    HorizontalShrink = true;
    MinimumWidth = 250;

    procedure InitControls(Data: JsonArray);
    procedure ValidationResult(Object: JsonObject);
    event ValidateField(Object: JsonObject);
    event ControlReady();
    event HandleClick(Clicked: Text);
}