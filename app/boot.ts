/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />

import {bootstrap}    from 'angular2/platform/browser'
import {CalculatorWrapperComponent} from './calculator-wrapper'
import {CalculatorService} from './calculator-service'

bootstrap(CalculatorWrapperComponent,[CalculatorService]);