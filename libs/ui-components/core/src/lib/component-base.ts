import { ElementRef } from '@angular/core';
import { mixinCssModifiers } from './behaviors';

export class ComponentElementBase {
  constructor(public _elementRef: ElementRef) {}
}

export class ComponentBase {
  constructor() {}
}

export const ComponentHostBase = mixinCssModifiers(ComponentElementBase);
