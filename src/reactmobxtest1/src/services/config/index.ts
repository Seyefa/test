import { Fetch } from '../fetch';

export class Config {
    public static async init() {
        try {
            const response = await Fetch.get('config.json');
            if (!response.ok) {
                throw Error(`${response.status} ${response.statusText}`);
            }

            const config = await response.json<Configuration>();
            window.config = config;
        } catch (error) {
            console.log('Could not fetch configuration: ', error);
            throw error;
        }
    }
}
