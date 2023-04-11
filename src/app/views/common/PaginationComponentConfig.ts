export class PaginationModel {
    CurrentPage: number;
    RecordPerPage: number;
    TotalRecord: number=0;
    SortName: string='';
    SortOrder: string;
    SearchText: string;
    VisibleColumnInfo: string;
    VisibleFilter: boolean;
    FilterID: string;
    ShowSearch: boolean;
    constructor() {
        this.SortOrder = "Desc";
        this.CurrentPage = 1;
        this.RecordPerPage = 10;
        this.SearchText = "";
        this.VisibleColumnInfo = "";
        this.VisibleFilter = false;
        this.FilterID = "0";
        this.ShowSearch = true;
    }
}
export class PaginationConfig {

    PrimaryColumn: string='';
    ColumnVisibilityCookieName: string='';
    CustomAction1Icon: string = "Action 1";
    CustomAction2Icon: string = "Action 2";
    CustomAction3Icon: string = "Action 3";
    Fields: DataField[] = [];
    Action = new ActionField();
}
export class DataField {
    Name: string='';
    Title: string='';
    OrderNo: number=0;
    SortingAllow: boolean=false;
    Visible: boolean=false;
    isDate: boolean=false;
    DateFormat: string='';
    IsShowCurrency?: boolean = false;
}
export class ActionField {
    Add: boolean=false;
    AddText: string = "fa fa-plus";
    AddTextType: string = "I";
    IsShowGoBackArrow: boolean = true;
    IsShowScreenName: boolean = true;
    IsShowSearchAndAddButton: boolean = true;
    IsCheckBox: boolean = false;
    Edit: boolean=false;
    Delete: boolean=false;
    View: boolean=false;
    Print: boolean=false;
    CopyTo: boolean = false;
    CustomAction1: boolean = false;
    CustomAction2: boolean = false;
    CustomAction3: boolean = false;
    PageHeaderVisible: boolean = true;
    ScreenName: string = "";
    PrintP: string = "";
}