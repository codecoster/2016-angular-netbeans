import {Component, Output, EventEmitter} from "angular2/core"

/**
 * Component for data input of the calculator.
 */
@Component({
    selector : "operand-input",
    template:"<input [(ngModel)]=value (ngModelChange)='inputChanged()'/>"
})
export class OperandInputComponent{
    @Output()
    valueChange = new EventEmitter();
    
    private value: string;
    
    /**
     * Returns the value of the operand input
     * @returns input as a number, or 0 if nothing specified
     */
    public getValue() {
        return this.value ? parseFloat(this.value) : 0;
    }
    
    /**
     * Triggers a value change event to update the calculation
     */
    private inputChanged() {
        this.valueChange.emit(this.value);
    }
}
