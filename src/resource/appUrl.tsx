export class AppUrl {
  baseUrl: string;
  mealsURL: string;
  constructor() {
    this.baseUrl = 'http://192.168.163.29:3000/Recepies';
    this.mealsURL=`${this.baseUrl}/recepies/meals`
  }
}
