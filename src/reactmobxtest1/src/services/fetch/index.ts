import 'whatwg-fetch';

export class Fetch {
    public static async get(url: string): Promise<Response> {
        try {
            //console.debug(`Fetch.get('${url}')`);
            return window.fetch(url);
        } catch (error) {
            console.error('Fetch.get: Error:', error);
            throw error;
        }
    }
}