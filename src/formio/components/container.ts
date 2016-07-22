import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BaseComponent, BaseElement, BaseOptions } from './base';
import { FormioComponents } from './components';
import { FormioTemplate } from '../formio';

export class ContainerComponent extends BaseComponent<BaseOptions<any>> {
    getControl(): FormGroup | FormControl {
        if (!this.control) {
            this.control = new FormGroup({});
        }
        return this.control;
    }
}

export class ContainerElement extends BaseElement {
    @Input() component: ContainerComponent;
}

export function Container(template:FormioTemplate) {
    FormioComponents.register('container', ContainerComponent, ContainerElement, {
        template: template.components.container
    });
    return ContainerElement;
};