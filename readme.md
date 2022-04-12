
### Built With

- [NodeJs](https://nodejs.org/en/)
- [axios](https://www.npmjs.com/package/axios)

### External APIs Used

- [googleapis](https://www.npmjs.com/package/googleapis)
- [wappalyzer](https://www.wappalyzer.com/)

### Installation 

1. Fork the project first

2. Clone this repo on your local machine
   ```sh
   git clone https://github.com/amanjha8100/task_zecko.git
   ```
3. In the project directory, install the packages using

   ```sh
   npm install
   ```

4. Create your wappalyzer account and store the API key in 'index.js', and google sheet id in the same 'index.js' file.

   ```sh
    WAPPALYZER_API_KEY = <your wappalyzer api key>

    GOOGLE_SHEETS_ID = <google sheet id>
   ```

5. To run the application copy the command,

   ```sh
   node index.js
   ```

### Enabling Goole Sheets API 

Follow this [video](https://www.youtube.com/watch?v=MiPpQzW_ya0)


### Link to sample spreadsheet : [output](https://docs.google.com/spreadsheets/d/1ZxgmWrvWU2gFey5Euh_df74FSho7PkO0_xTU2vejGv4/edit#gid=631571681)