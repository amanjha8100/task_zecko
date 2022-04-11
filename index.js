import axios from 'axios';

import { authorize } from './sheets/auth.js';

const WAPPALYZER_API_KEY = 'PV90AoYDNX2NgF4lTBSO05e5Qa8netxz8s9VH7aB'

const SHEETS_ID = '1ZxgmWrvWU2gFey5Euh_df74FSho7PkO0_xTU2vejGv4'


const output = async (data) => {

    const { sh } = await authorize() ;

    sh.spreadsheets.values.append({
        spreadsheetId: SHEETS_ID , 
        range: 'Post program run' ,
        valueInputOption: "USER_ENTERED" , 
        resource : {
            values : data
        }
    }, (err) => {
        if (err) {
            console.log(err) ;
        } 
    }) ; 

}

const task = async() => {
    try{
        const {sh} = await authorize();

        const {data} = await sh.spreadsheets.values.get({
            spreadsheetId: SHEETS_ID,
            range: 'Pre program run'
        });

        
        data.values[0].push("CATEGORIES");

        for(let i=1;i<data.values.length;i++)
        {
            if (!data.values[i][0].startsWith("https://"))
            {
                data.values[i][0] = "https://" + data.values[i][0] ;
            }
            const ans = await axios.get(
                `https://api.wappalyzer.com/v2/lookup/?urls=${data.values[i][0]}&recursive=false` , 
                {
                    headers : {
                        "x-api-key" : WAPPALYZER_API_KEY
                    }
                } 
            ).then(ans=>ans.data[0]);

            let category = "OTHERS";
            
            let tech = ans.technologies

            if(tech)
            {
                for(let j=0;j<tech.length;j++)
                {
                    switch(tech[j].slug)
                    {
                        case "shopify": {
                            category = "SHOPIFY";
                            break;
                        }

                        case "magento" : {
                            category = "MAGENTO";
                            break;
                        }

                        case "woocommerce": {
                            category = "WOOCOMMERCE";
                            break;
                        }

                        case "bigcommerce": {
                            category = "BIGCOMMERCE";
                            break;
                        }

                        default: {
                            break;
                        }
                    }
                }

                data.values[i].push(category);
            }
            else {
                data.values[i].push("NOT WORKING");
            }
        }

        await output(data.values);
    }
    catch(error) {
        console.error(error);
    }
}

task();