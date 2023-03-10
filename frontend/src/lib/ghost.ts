import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
    url: 'https://www.michaelvictorino.dev', // This is the default URL if your site is running on a local environment
    key: '9776631b76782ddf161e8c0178',
    version: 'v5.0',
});