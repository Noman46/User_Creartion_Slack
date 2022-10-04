const axios = require('axios').default;


async function myUser() {
    

    const config = {
        headers: {
            "Content-Type": "application/json",
            "X-Correlation_Id": "Trisha-1-1-1-0"
        }
    }
    const publication = "recharge"
    const NCP_GLOBAL_BASEURL = "http://test.ncp.nhst.no:8080"
    const url = NCP_GLOBAL_BASEURL + "/account/" + publication + "/subscribe/autoimport"
    
    const data = JSON.stringify(
        {
            "startDate": "2022-10-03",
            "countryCode": "NO",
            "numberOfCopies": 1,
            "onlinePayment": false,
            "street": "Place Jean Millier",
            "addressExtension4": "Paris La defense 92000",
            "startCode": "WS",
            "salesPersonCode": "WEB",
            "addressExtension1": "",
            "addressExtension2": "",
            "addressExtension3": "",
            "username": "testfromnodes12456@dispostable.com",
            "password": "1qazZAQ!",
            "marketingActivityCode": "WERS",
            "lastname": "TotalEnergies",
            "zipCode": "",
            "termCode": "12",
            "workPhone": "+45657676767",
            "coAddress": "Test User",
            "email": "testfromnodes12456@dispostable.com",
            "titles": [
                {
                    "titleCode": "RE",
                    "productCode": "ON",
                    "title": "RE",
                    "productText": "Auto Recharge: Digital Annual",
                    "offerCode": "",
                    "campaignCode": "W"
                }
            ],
            "privatePhone": "+76765888888",
            "zipText": "Paris La defense"
        }
    )
    
    try {
        const res = await axios.post(url, data, config)
        console.log(res)
    } catch (error) {
        console.log(error)
    }




  }

  myUser()


