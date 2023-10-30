import {
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export default class InputComponent {
  @Input({ required: true }) controlName: string;

  @Input() value?: string = '';

  @Input() placeholder?: string = '';

  @Input({ required: true }) label = 'label';

  @Input() type?: string = 'text';

  @Input({ required: true }) formGroup: FormGroup;

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  invalid = false;

  focused = false;

  get formControlStatus() {
    return this.formGroup.get(this.controlName)!;
  }

  handleOnFocus() {
    this.focused = true;
  }

  handleOnBlur() {
    this.focused = false;
  }

  handleOnClick() {
    this.input.nativeElement.focus();
    this.focused = true;
  }
}
