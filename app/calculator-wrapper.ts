import {Component} from 'angular2/core'
import {CalculatorComponent} from './calculator-component'

/**
 * Wrapper for the calculator component to be used a bootstrap component.
 * This allows multiple calculators on the same page to illustrate reuse.
 */
@Component({
    selector: "calculator-wrapper",
    template: "<calculator></calculator>\n\
               <hr>\n\
               <calculator></calculator>",
    directives: [CalculatorComponent]
})
export class CalculatorWrapperComponent{}