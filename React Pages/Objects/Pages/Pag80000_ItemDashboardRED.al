page 80000 ItemDashboardRED
{
    Caption = 'Item Dashboard';
    PageType = CardPart;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = "Item";
    SourceTableTemporary = true;

    layout
    {
        area(Content)
        {
            group(DashboardGroup)
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

    var
        ControlIsReady: Boolean;
}