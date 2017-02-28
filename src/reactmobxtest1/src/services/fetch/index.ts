export class Fetch {
    public static async get(url: string): Promise<Response> {
        try {
            //console.debug(`Fetch.get('${url}')`);
            return window.fetch(url)
                .then(response => {
                    if (!response.ok) {
                        console.error('Fetch.get: Error:', `${response.status} ${response.statusText}`);
                        throw Error(`${response.status} ${response.statusText}`);
                    }
                    return response;
                });
        } catch (error) {
            console.error('Fetch.get: Error:', error);
            throw error;
        }
    }

    public static async getJson<T>(url: string): Promise<T> {
        try {
            //console.debug(`Fetch.getJson('${url}')`);
            var response =  await window.fetch(url);
            if (!response.ok) {
                console.error('Fetch.getJson: Error:', `${response.status} ${response.statusText}`);
                throw Error(`${response.status} ${response.statusText}`);
            }

            return response.json<T>();
        } catch (error) {
            console.error('Fetch.getJson: Error:', error);
            throw error;
        }
    }
}