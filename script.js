//http://api.weatherapi.com/v1/current.json?key=c655ab9bc9884899ae3204621251709&q=Koforidua&aqi=no

let target = 'Accra'
const fetchResults = async(targetLocation) => {
        let url = `http://api.weatherapi.com/v1/current.json?key=c655ab9bc9884899ae3204621251709&q=${targetLocation}&aqi=no`
        const res = await fetch(url)

        const data = await res.json()

        console.log(data)

        let locationName = data.location.name
        let time = data.location.localtime
        let temp = data.current.temp_c
        
} 

     fetchResults(target)