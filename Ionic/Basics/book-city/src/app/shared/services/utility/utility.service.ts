import { Injectable } from "@angular/core";
import { AlertController, AlertOptions } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  constructor(private readonly _alertController: AlertController) {}

  public async showInputValidationError(options: AlertOptions) {
    const alert = await this._alertController.create(options);

    await alert.present();
  }

  public getRandomId(
    length: number,
    idType: "NUMBER" | "CHARACTER" | "MIXED",
    sep?: string,
  ): string {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const alphabets = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let randomId = "";

    switch (idType) {
      case "NUMBER":
        randomId = this._generateId(length, numbers, sep);
        break;
      case "CHARACTER":
        randomId = this._generateId(length, alphabets, sep);
        break;
      case "MIXED":
        randomId = this._generateId(length, [...alphabets, ...numbers], sep);
        break;
      default:
        break;
    }
    return randomId;
  }

  private _generateId(length: number, targetList: string[], sep: string = ""): string {
    let randomId: string[] = [];

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * targetList.length);
      randomId.push(targetList[randomIndex]);
    }

    return randomId.join(sep);
  }
}
