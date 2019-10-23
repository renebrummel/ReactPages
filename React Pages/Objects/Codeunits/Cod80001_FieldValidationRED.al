codeunit 80001 "Field Validation RED"
{
    trigger OnRun()
    begin
        FldRef.Validate(); // Move to codeunit so we can do tryvalidate and rollback when needed
        RecRef.Modify();
    end;

    procedure SetRecordRef(var NewRecRef: RecordRef)
    begin
        RecRef := NewRecRef;
    end;

    procedure SetFieldRef(var NewFldRef: FieldRef)
    begin
        FldRef := NewFldRef;
    end;

    var
        FldRef: FieldRef;
        RecRef: RecordRef;
}