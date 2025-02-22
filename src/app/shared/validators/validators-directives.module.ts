import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidateDirective } from './email-validate.directive';
import { OfferDescriptionValidateDirective } from './offer-description-validate.directive';
import { OfferTitleValidateDirective } from './offer-title-validate.directive';
import { SimplePhoneValidateDirective } from './simple-phone-validate.directive';

const directives = [
  EmailValidateDirective,
  OfferDescriptionValidateDirective,
  OfferTitleValidateDirective,
  SimplePhoneValidateDirective,
];

@NgModule({
  declarations: [...directives],
  exports: [...directives],
  imports: [CommonModule],
})
export class ValidatorsDirectivesModule {}
