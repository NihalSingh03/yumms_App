export class ApiService {
  jsonResponse: any;
  static async getApiResponse(url: string) {
    try {
      const requestBody = this.createRequestBody("GET");
      const response = await fetch(url, requestBody);
      const jsonResponse = await this.getResponse(response);
      return jsonResponse;
    } catch (error) {
      throw error;
    }
  }
  static async postApiResponse(url: string, payload: any) {
    try {
      const requestBody = this.createRequestBody("POST", payload);
      const response = await fetch(url, requestBody);
      const jsonResponse = await this.getResponse(response);
      return jsonResponse;
    } catch (error) {
      throw error;
    }
  }
  static async putApiResponse(url: string, payload: any) {
    try {
      const requestBody = this.createRequestBody("PUT", payload);
      const response = await fetch(url, requestBody);
      const jsonResponse = await this.getResponse(response);
      return jsonResponse;
    } catch (error) {
      throw error;
    }
  }
  static async deleteApiResponse(url: string) {
    try {
      const requestBody = this.createRequestBody("DELETE");
      const response = await fetch(url, requestBody);
      const jsonResponse = await this.getResponse(response);
      return jsonResponse;
    } catch (error) {
      throw error;
    }
  }
  static async getResponse(response: Response) {
    const body = await response.json();
    switch (response.status) {
      case 200:
        return body;
      case 201:
        return body;
      case 404:
        throw new Error("Page Not Found!!!");

      default:
        throw new Error("Something Went Wrong!!");
    }
  }
  static createRequestBody(method: string, payload: any = {}) {
    const defaultBody = {
      method,
      headers: {
        "Content-Type": "application/json",
       // Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };
    return method === "GET"
      ? defaultBody
      : { ...defaultBody, body: JSON.stringify(payload) };
  }
}
 
//! we can only call static data member inside data function.and vice-a-versa.
