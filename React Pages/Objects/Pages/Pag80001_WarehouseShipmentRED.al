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
                    var
                        Data: JsonArray;
                    begin
                        ControlIsReady := true;
                        CurrPage.WhseShpmtControlAddinRED.InitControls(Data);
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

    var
        ControlIsReady: Boolean;
}