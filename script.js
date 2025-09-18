//http://api.weatherapi.com/v1/current.json?key=c655ab9bc9884899ae3204621251709&q=Koforidua&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dataField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const searchbutton = document.querySelector(".search_button");
const form = document.querySelector("form");

form.addEventListener('submit', searchForLocation)

let target = 'Accra'
const fetchResults = async(targetLocation) => {
        let url = `http://api.weatherapi.com/v1/current.json?key=c655ab9bc9884899ae3204621251709&q=${targetLocation}&aqi=no`
        const res = await fetch(url)

        const data = await res.json()

        console.log(data)

        let locationName = data.location.name
        let time = data.location.localtime
        let temp = data.current.temp_c
        let condition = data.current.condition.text

        updateDetails(temp,locationName,time,condition)

        function updateDetails(temp,locationName,time,condition){

                let splitDate = time.split(' ')[0]
                let splitTime = time.split(' ')[1]

                let currentDay = getDayName(new  Date(splitDate).getDay());

                  temperatureField.innerText = temp + "°C"
                  locationField.innerText = locationName
                  dataField.innerText = '${splitDate}  ${currentDay}  ${splitTime}'
                  weatherField.innerText = condition
        }


        function searchForLocation(e) {
                e.preventDefault()

                target = searchField.value

                fetchResults(target)
        }


        
} 

 function searchForLocation(e) {
                e.preventDefault()

                target = searchField.value

                fetchResults(target)
        }


     fetchResults(target)


     function getDayName(number) {
        switch(number){
                case 0:
                        return 'Sunday'
                        break;

                case 1:
                        return 'Monday'
                        break;



               case 2:
                        return 'Tuesday'
                        break;

                case 3:
                        return 'Wednesday'
                        break;

                case 4:
                        return 'Thursday'
                        break;

                case 5:
                        return 'Friday'
                        break;

                case 6:
                        return 'Saturday'
                        break;

                        default:
                                return 'Invalid'
        }
        

     }