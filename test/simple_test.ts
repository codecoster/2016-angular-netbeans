import {it, describe, expect, beforeEach, beforeEachProviders, inject} from 'angular2/testing';
import {CalculatorService} from "../app/calculator-service";
import {CalculatorComponent} from "../app/calculator-component";

describe('Test of the calculation execution of the service', () => {
    beforeEachProviders(() => [CalculatorService])

    it('should sum',
        inject([CalculatorService], (service: CalculatorService) => {
            expect(service.performOperation([1, 2], "+")).toBe(3);
        })
    );
    it('should multiply',
        inject([CalculatorService], (service: CalculatorService) => {
            expect(service.performOperation([1, 2], "*")).toBe(2);
        })
    );
    it('should subtract',
        inject([CalculatorService], (service: CalculatorService) => {
            expect(service.performOperation([1, 2], "-")).toBe(-1);
        })
    );
    it('should divide',
        inject([CalculatorService], (service: CalculatorService) => {
            expect(service.performOperation([1, 2], "/")).toBe(0.5);
        })
    );
});

describe('calculator component', () => {
    let component: CalculatorComponent;
    let service: CalculatorService = new CalculatorService();

    beforeEach(() => {
        component = new CalculatorComponent(service);
    });

    it('should be initially selected a "+" operation', () => {
        expect(component.isSelected('+')).toBe(true);
    });

});
