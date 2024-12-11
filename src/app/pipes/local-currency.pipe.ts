import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localCurrency'
})
export class LocalCurrencyPipe implements PipeTransform {

  transform(
    value: number | null | undefined,
    currencySymbol: string = 'S./ ',
    decimalLength: number = 2,
    locale: string = 'en-US'
  ): string {
    if (value == null) {
      return '';
    }

    // Usa `Intl.NumberFormat` para manejar el formato de moneda
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'USD', // Usamos USD solo para los separadores, puedes ajustar según tu necesidad
      minimumFractionDigits: decimalLength,
      maximumFractionDigits: decimalLength,
    });

    // Reemplaza el símbolo predeterminado con el personalizado
    return formatter.format(value).replace('$', currencySymbol);
  }
}
