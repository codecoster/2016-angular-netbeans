import {Injectable} from 'angular2/core';

/**
 * Service to provide the business logic of the calculator.
 */
@Injectable()
export class CalculatorService {

    /**
     * Calculates the result by reducing the given operands with the given operation
     * @param operands the array of available operands to perform the operation on
     * @param operation the operation used for reducing the operands
     * @returns the calculation result
     */
    public performOperation(operands: number[], operation: string) {
        return operands.reduce(this.convertOperation(operation));
    }

    /**
     * Converts an operator to a specific calculation implementation
     */
    private convertOperation(operator: string) {
        switch (operator) {
            case "+": {
                return function(operand1, operand2) {
                    return operand1 + operand2;
                };
            }
            case "-": {
                return function(operand1, operand2) {
                    return operand1 - operand2;
                };
            }
            case "*": {
                return function(operand1, operand2) {
                    return operand1 * operand2;
                };
            }
            case "/": {
                return function(operand1, operand2) {
                    return operand1 / operand2;
                };
            }
            default: return function(operand1, operand2) {
                return operand1 + operand2;
            };
        }
    }
}
