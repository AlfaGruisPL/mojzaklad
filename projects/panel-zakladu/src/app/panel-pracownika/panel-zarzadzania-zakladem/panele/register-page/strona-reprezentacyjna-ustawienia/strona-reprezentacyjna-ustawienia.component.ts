import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PodreczneDaneService } from '../../../../../serwisy/podreczne-dane.service';
import { CommonModule } from '@angular/common';
import { UiSwitchModule } from 'ngx-ui-switch';
import { RouterOutlet } from '@angular/router';
import { RegisterPageService } from '../register-page.service';
import { RegisterPageIframeComponent } from './register-page-iframe/register-page-iframe.component';
import { KomunikatUniwersalnyService } from '../../../../../komponets/komunikat-uniwersalny/komunikat-uniwersalny.service';
import { take } from 'rxjs';
import { SelectImageComponent } from '../../files/select-image/select-image.component';
import { NgxEditorModule } from 'ngx-editor';
import { RegisterPageSaveButtonComponent } from '../register-page-save-button/register-page-save-button.component';
import { TemplateIdDirective } from '../../../../../komponets/table/template-id.directive';
import { TemplateSettingComponent } from '../templates/components/template-setting/template-setting.component';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UiSwitchModule,
    RouterOutlet,
    RegisterPageIframeComponent,
    SelectImageComponent,
    NgxEditorModule,
    RegisterPageSaveButtonComponent,
    TemplateIdDirective,
    TemplateSettingComponent,
  ],
  selector: "app-strona-reprezentacyjna-ustawienia [style]='color:red'",
  templateUrl: './strona-reprezentacyjna-ustawienia.component.html',
  styleUrls: ['./strona-reprezentacyjna-ustawienia.component.scss', '../register-page.component.scss'],
})
export class StronaReprezentacyjnaUstawieniaComponent {
  @Output() odswiez = new EventEmitter();
  protected readonly environment = environment;
  protected readonly undefined = undefined;

  constructor(
    public registerPage_: RegisterPageService,
    public danePodreczne_: PodreczneDaneService,
    private universalPrompt: KomunikatUniwersalnyService
  ) {}

  changeTemplate(target: EventTarget | null) {
    const newValue = (target as HTMLSelectElement).value;
    const last = this.registerPage_.selectedTemplate;
    this.registerPage_.selectedTemplate = '';
    setTimeout(() => {
      this.registerPage_.selectedTemplate = last;
    }, 10);
    const prompt = this.universalPrompt.open(
      'Czy na pewno chcesz zmienić szablon?',
      'Zmiana szablonu powoduje utratę ustawień szablonu i jego danych.'
    );
    prompt.addButton('Nie', { defaultNo: true });

    prompt
      .addButton('Tak', { defaultYes: true })
      .pipe(take(1))
      .subscribe(success => {
        this.registerPage_.selectedTemplate = newValue;
      });
  }
}
