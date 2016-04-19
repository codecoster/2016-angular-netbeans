import {Component, Input, Output, EventEmitter} from "angular2/core"

/**
 * With this Component, selection of a particular operation is possible. 
 */
@Component({
    selector: "operator-selector",
    template: "<button [class.active]='selected' (click)='changeOperation()'>{{operation}}</button>"
})
export class OperatorSelectorComponent {
    @Input()
    operation;
    
    @Input()
    selected;
    
    @Output()
    operationChanged = new EventEmitter();
    
    private changeOperation() {
        this.operationChanged.emit(this.operation);
    }
   
}