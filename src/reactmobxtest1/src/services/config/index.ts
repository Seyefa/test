import 'whatwg-fetch';

export class Config {
    private static handleErrors(response: Response): Response {
        if (!response.ok) {
            throw Error(`${response.status} ${response.statusText}`);
        }
        return response;
    }

    static init() {
        return fetch('config.json')
            .then<Response>(Config.handleErrors)
            .then<Config>(response => response.json())
            .then(config => (<any>window).config = config)
            .catch(ex => {
                console.log('Could not fetch configuration: ', ex);
                throw ex;
            });
    }
}
