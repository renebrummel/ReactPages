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

                    trigger HandleClick(Clicked: JsonArray)
                    begin
                        Message(Format(Clicked));
                    end;

                    trigger UpdateRecord(Object: JsonArray)
                    begin
                        UpdateRecord(Object);
                    end;
                }
            }
        }
    }

    trigger OnOpenPage()
    var
        WarehouseShipmentHeader: Record "Warehouse Shipment Header";
    begin
        WarehouseShipmentHeader.SetRange(Status, Status::Open);
        if WarehouseShipmentHeader.FindFirst() then
            SetRecord(WarehouseShipmentHeader);
    end;

    procedure SetRecord(WarehouseShipmentHeader: Record "Warehouse Shipment Header")
    begin
        Rec := WarehouseShipmentHeader;
    end;

    local procedure UpdateRecord(Object: JsonArray)
    begin
    end;

    local procedure InitControls()
    var
        DataArray: JsonArray;
        DataObject: JsonObject;
    begin
        DataObject.Add('fieldcaption', FieldCaption("No."));
        DataObject.Add('fieldvalue', Format("No."));
        DataArray.Add(DataObject);
        Clear(DataObject);
        DataObject.Add('fieldcaption', FieldCaption("Location Code"));
        DataObject.Add('fieldvalue', Format("Location Code"));
        DataArray.Add(DataObject);
        Clear(DataObject);
        DataObject.Add('fieldcaption', FieldCaption(Comment));
        DataObject.Add('fieldvalue', Format(Comment));
        DataArray.Add(DataObject);
        Clear(DataObject);

        // Message(Format(DataArray));
        CurrPage.WhseShpmtControlAddinRED.InitControls(DataArray);
    end;

    var
        ControlIsReady: Boolean;
}