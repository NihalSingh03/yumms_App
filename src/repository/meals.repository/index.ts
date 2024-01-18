import {ApiService} from './../../data/network/Apiservices';
import {AppUrl} from './../../resource/appUrl';

export class MealsRepository {
  AppUrl: AppUrl;
  constructor() {
    this.AppUrl = new AppUrl();
   
  }

  async getRecipes(pyload: any) {
    const url = `${this.AppUrl.mealsURL}/`;
    try {
      // return ApiService.postApiResponse()
    } catch (error) {
      throw error;
    }
  }
} 
