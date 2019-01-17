const axios = require('axios')
const CryptoJS = require("crypto-js")
const crypto = require("crypto")

require('dotenv').config()

axios.defaults.headers.post['Content-Type'] = 'application/json'

const main = async () => {

    const buildCanonicalRequest = (httpMethod, apiHost, apiUrl, query) => {
        return `${httpMethod} ${apiHost}` + '\n' + `${apiUrl}` + '\n' + `${query}`
   }

   const computeSignature = (request) => {
        const hash = CryptoJS.HmacSHA256(request, apiSecret);
        const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        return hashInBase64
   }

    const apiKey = `fm_apikey=${process.env.FINMASON_API_KEY}`
    const apiHost = process.env.FINMASON_API_HOST
    const apiSecret = process.env.FINMASON_API_SECRET
    // const apiURL = 'v2/portfolio/analyze'
    const apiURL = 'v2/echo'

    // const getTimestamp = async () => {
    //     const url = `https://demo-api.finmason.com/v2/timestamp?${query}`
    //     const response = await axios.post(url)
    //     return response.data
    // }

    const getTimestamp = () => {
        return new Date().toISOString()
    }

    const signatureMethod = `signature_method=HmacSHA256`
    const signatureVersion = `signature_version=2`

    let query = `${apiKey}&${signatureMethod}&${signatureVersion}`
    const time = await getTimestamp()
    const timestamp = `timestamp=${time}`

    query = `${query}&${timestamp}`

    query = query
    
    // function getSignature(requestUrl) {
    //     var crypto = require('crypto');

    //     var hash = crypto.createHmac('sha256', apiSecret).update(requestUrl);
    //     console.log(hash, hash.digest('base64'))
    //     return hash.digest('base64');
    // }
    
    const canonicalRequest = buildCanonicalRequest("POST", apiHost, apiURL, query)
    const encodedSignature = computeSignature(canonicalRequest)
    const signature = `signature=${encodedSignature}`
    query = `${query}&${signature}`

    // const portfolio = {
    //     portfolio_stats: [ "finscore" ],
    //     positions: [
    //         {
    //             cusip: "037833100",
    //             value: 100,
    //             weight: 1,
    //         },
    //     ],
    // }

    const getPortfolioScore = async (portfolio) => {
        const url = `https://demo-api.finmason.com/${apiURL}?${query}`
        console.log(' ')
        console.log(' ')
        console.log(JSON.stringify(portfolio))
        console.log(' ')
        console.log(' ')
        console.log(url)

        console.log('PORTFOLIO PAYLOAD:', JSON.stringify(portfolio))
        const response = await axios.post(url, portfolio)

        return response.data
    }

    getPortfolioScore({
        "positions": [
          {"cusip": "40169J689", "value": 1123.55},
          {"cusip": "76123K602", "value": 711.99}
        ],
         "asset_stats": [
          "finscore",
          "drawdown_hyb_fb_20yr_series",
          "beta_hml_fm"
        ],
        "portfolio_stats": [
          "finscore",
          "drawdown_hyb_fb_20yr_series",
          "beta_hml_fm"
        ]
      }).then(data => {
        console.log(' ')
        console.log(' ')
        console.log(data)
    
    })
}

main()