export class AppConstants {

    private readonly constants = {
        EN: 'EN',
        DE: 'DE'
    };

    private readonly endpoints = {
        API_URL: 'http://...'
    }

    // Used to get a constant or an endpoint 
    getValue(type: string, key: string): string {
        return this[type][key];
        
    };

}
