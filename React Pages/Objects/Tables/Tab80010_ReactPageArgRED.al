table 80010 ReactPageArgRED
{
    DataClassification = ToBeClassified;
    Caption = 'React Page';

    fields
    {
        field(1; "Entry No."; Integer)
        {
            Caption = 'Entry No.';
            DataClassification = ToBeClassified;
        }
        field(10; "Page Metadata"; Blob)
        {
            Caption = 'Field List';
            DataClassification = ToBeClassified;
        }
        field(20; "Source Record Id"; RecordId)
        {
            Caption = 'Source Record Id';
            DataClassification = ToBeClassified;
        }
        field(30; "Parent Record Id"; RecordId)
        {
            Caption = 'Parent Record Id';
            DataClassification = ToBeClassified;
        }
        field(35; "Parent Data Link"; Blob)
        {
            Caption = 'Parent Data Link';
            DataClassification = ToBeClassified;
        }
    }

    keys
    {
        key(PK; "Entry No.")
        {
            Clustered = true;
        }
    }

    var
        CannotInsertErr: Label 'You cannot save data in this table';

    trigger OnInsert()
    begin
        Error(CannotInsertErr);
    end;

    procedure GetPageMetadata() FieldList: JsonObject;
    var
        StreamIn: InStream;
        JsonText: Text;
    begin
        CalcFields("Page Metadata");
        "Page Metadata".CreateInStream(StreamIn);
        StreamIn.ReadText(JsonText);
        Evaluate(FieldList, JsonText);
    end;
}