import { google } from 'googleapis' ;

export const authorize = async () => {
    const permission = new google.auth.GoogleAuth({
        keyFile: "sheets/credentials.json",
        scopes : "https://www.googleapis.com/auth/spreadsheets"
    });

    const client = await permission.getClient();

    const sh = google.sheets({
        version : 'v4',
        auth : client
    })

    return {sh};
};
