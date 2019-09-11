page 80001 "Warehouse Shipment RED"
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;
    // SourceTable = TableName;

    layout
    {
        area(Content)
        {
            group(ReactGroup)
            {
                Caption = 'Dashboard';
                usercontrol(ItemControlAddinRED; ItemControlAddinRED)
                {
                    ApplicationArea = All;

                    trigger ControlReady()
                    var
                        Data: JsonArray;
                    begin
                        ControlIsReady := true;
                        CurrPage.ItemControlAddinRED.InitControls(Data);
                    end;

                    trigger HandleClick(Clicked: Text)
                    begin
                        Message(Clicked);
                    end;
                }
            }
        }
    }

    procedure SetRecord(WarehouseShipmentHeader: Record "Warehouse Shipment Header")
    var
        myInt: Integer;
    begin

    end;

    var
        ControlIsReady: Boolean;
}