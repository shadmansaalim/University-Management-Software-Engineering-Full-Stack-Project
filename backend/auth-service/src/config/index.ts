// Imports
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

// Exporting env variable's value for use in app
export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
}