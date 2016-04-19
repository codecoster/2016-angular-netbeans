import {Component, ChangeDetectionStrategy, ViewChildren, QueryList} from "angular2/core"
import {OperatorSelectorComponent} from "./operator-selector-component"
import {OperandInputComponent} from "./operand-input-component"
import {CalculatorService} from "./calculator-service"

/**
 * Main Component of the calculator providing input, operator control and output elements.
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "calculator",
    template: `
        <operand-input (valueChange)="inputChange()" ></operand-input>
        <br/>
        <operator-selector *ngFor="#op of possibleOperations" [operation]="op" \n\
            [selected]="isSelected(op)" (operationChanged)="operationChange($event)"></operator-selector>
        <br/>
        <operand-input (valueChange)="inputChange()" ></operand-input>
        <br/>
        Result: {{result}}`,
    directives: [OperatorSelectorComponent, OperandInputComponent]
})
export class CalculatorComponent {
    @ViewChildren(OperandInputComponent)
    inputComponents: QueryList<OperandInputComponent>;
    
    private selectedOperation: string;
    private result: number;
    private possibleOperations: Array<string>;

    /**
     * Creates a new Calculator component.
     * @param calculatorService the calculator service to use
     */
    // note the shorthand-property syntax
    constructor(private calculatorService: CalculatorService) {
        this.selectedOperation = "+";
        this.possibleOperations = ["+", "-", "*", "/"]; //Available operators are later resolved to a 'calculation strategy' in the calculation service
    }

    /**
     * Determines if the specified operation is currently active.
     * @param operation the operation to determine the state
     * @returns true if the specified operation is selected, false otherwise
     */
    isSelected(operation: string) {
        return this.selectedOperation == operation;
    }

    /**
     * Handles input change events by initiating a new calculation.
     */
    inputChange() {
        this.calculate();
    }

    /**
     * Handles a change of the desired operation by selecting it and triggering a new calculation.
     * @param operation the operation to select
     */
    operationChange(operation: string) {
        this.selectedOperation = operation;
        this.calculate();
    }
    
    /**
     * Handles a calculation request, actual calculation is delegated to calculator service.
     */
    private calculate() {
        this.result = this.calculatorService.performOperation(this.inputComponents.map(cmp => cmp.getValue()), this.selectedOperation);
    }
}
