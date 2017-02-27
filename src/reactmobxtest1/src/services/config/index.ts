import { Fetch } from '../fetch';

export class Config {
    public static async init() {
        try {
            const config = await Fetch.getJson<Configuration>('config.json');
            window.config = config;
        } catch (error) {
            console.error('Could not fetch configuration:', error);
            throw error;
        }
    }
}
