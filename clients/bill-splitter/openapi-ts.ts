import { createClient } from '@hey-api/openapi-ts';

createClient({
    client: '@hey-api/client-fetch',
    input: 'src/client/openapi.json',
    output: 'src/client',
});