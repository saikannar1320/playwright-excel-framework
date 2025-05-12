import * as dotenv from 'dotenv';

dotenv.config();

const environment = process.env.ENVIRONMENT || 'SIT'; // Default to SIT if not passed

const getEnvConfig = (env: string) => {
    switch (env.toUpperCase()) {
        case 'SIT':
            return {
                customerPortalURL: process.env.SIT_URL,
                telephonyPortalURL: process.env.SIT_TELEPHONY_URL,
                username: process.env.SIT_USERNAME,
                password: process.env.SIT_PASSWORD,
            };
        case 'UAT':
            return {
                customerPortalURL: process.env.UAT_URL,
                telephonyPortalURL: process.env.UAT_TELEPHONY_URL,
                username: process.env.UAT_USERNAME,
                password: process.env.UAT_PASSWORD,
            };
        case 'ST':
            return {
                customerPortalURL: process.env.ST_URL,
                telephonyPortalURL: process.env.ST_TELEPHONY_URL,
                username: process.env.ST_USERNAME,
                password: process.env.ST_PASSWORD,
            };
        default:
            throw new Error(`Unknown Environment: ${env}`);
    }
};

export const config = getEnvConfig(environment);
