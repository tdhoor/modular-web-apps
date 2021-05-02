
export const SERVER_URL = 'http://localhost:9898';

export class NetworkService {
    private static instance: NetworkService;

    private constructor(){}

    public static getInstance(): NetworkService {
        if (!NetworkService.instance) {
            NetworkService.instance = new NetworkService();
        }

        return NetworkService.instance;
    }

    async get(url, id){
      const newUrl = id >= 0 ? url + '/' + id : url;
      const response = await fetch(newUrl, {method: 'GET'});
      const content = await response.json();
      return content;
    }

    async put(url, item){
      const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
      });
      return await response;
    }

    async post(url, item){
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      });

      return await response;
    }

    async delete(url, id){
      const newUrl = url + '/' + id;

      const response = await fetch(newUrl, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
      });

      const content = await response.json();
      return content;
    }

  async getFile(url){

      const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
      });

    return await response.body.getReader();
  }
}


