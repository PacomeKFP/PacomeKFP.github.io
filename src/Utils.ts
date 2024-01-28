import { Country } from "./Types/Enums";

export class Utils {
  static locale: string = "fr";

  static stringifyPhoneNumber(
    phoneNumber: number,
    country: Country = Country.Cameroon
  ): [string, string] {
    if (country != Country.Cameroon) {
      return [phoneNumber.toString(), phoneNumber.toString()];
    }

    let number: string = phoneNumber.toString().trim();

    // invalid length for the phone number
    if (![9, 12].includes(number.length))
      return [phoneNumber.toString(), phoneNumber.toString()];

    // ensure the number contain the +237 without any space
    if (number.length == 9) number = `+237${number}`;
    do {
      number.replace(" ", "");
    } while (number.search(" ") != -1);

    const formatedNumber: string = `${number[0]}${number.substring(
      1,
      4
    )} ${number.substring(4, 7)} ${number.substring(7, 10)} ${number.substring(
      10,
      13
    )}`;

    return [number, formatedNumber];
  }
}
