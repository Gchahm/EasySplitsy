import { createClient, createConfig, type Config } from "@hey-api/client-fetch";
export * from "./ez-split";

export const createClientWithConfig = (config: Config) => {
    return createClient(createConfig(config));
};
