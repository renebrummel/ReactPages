page 80001 "Warehouse Shipment RED"
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = "Warehouse Shipment Header";

    layout
    {
        area(Content)
        {
            group(ReactGroup)
            {
                Caption = 'React';
                usercontrol(WhseShpmtControlAddinRED; WhseShpmtControlAddinRED)
                {
                    ApplicationArea = All;

                    trigger ControlReady()
                    begin
                        ControlIsReady := true;
                        InitControls();
                    end;

                    trigger HandleClick(Clicked: JsonObject)
                    begin
                        Message(Format(Clicked));
                    end;
                }
            }
        }
    }

    procedure SetRecord(WarehouseShipmentHeader: Record "Warehouse Shipment Header")
    begin
        Rec := WarehouseShipmentHeader;
    end;

    local procedure InitControls()
    var
        Data: JsonArray;
        DataObject: JsonObject;
    begin
        DataObject.Add(FieldCaption("No."), Format("No."));
        Data.Add(DataObject);

        CurrPage.WhseShpmtControlAddinRED.InitControls(Data);
    end;

    var
        ControlIsReady: Boolean;
}