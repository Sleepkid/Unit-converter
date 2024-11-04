const  inputEl = document.querySelector("#input-el")
const outputEl = document.querySelector("#output-el")
const fromUnitEl = document.querySelector("#from-unit")
const toUnitEl = document.querySelector("#to-unit")
const conversionSelect = document.querySelector("#conversion-select")


const conversionFactors = {
    length:{
        "centimeter":{
                "centimeter":1,
                "meter":0.01,
                "millimeter": 10,
       },
        "meter":{
                "centimeter":100,
                "meter":1,
                "millimeter":1000,
        },
        "millimeter":{
                "millimeter":1,
                "centimeter":0.1,
                "meter":0.001,
        }
    },
    area:{
        "square-meter" : {
            "square-meter" :1,
            "acre":  0.00024710538,
        },
        "acre":{
            "square-meter":4046.86,
            "acre":1,
        }
    },
    volume:{
        "liter":{
            "liter":1,
            "milliliter":1000,
        },
        "milliliter":{
            "milliliter":1,
            "liter":0.001,
        }          
    }, 
    mass:{
        "kilogram":{
            "kilogram":1,
            "gram":1000,
            "tonne":0.001,
        },
        "gram":{
            "gram":1,
            "kilogram":0.001,
            "tonne":1e-6,
        },
        "tonne":{
            "tonne":1,
            "kilogram":1000,
            "gram":1e+6,
        }
    },
    energy:{
      "joule":{
            "joule":1,
            "kilojoule":0.001,
            "watthour":0.00027778,
            "kilowatt-hour":2.7778e-7,
    },
      "kilojoule":{
         "kilojoule":1,
         "joule":1000,
         "watthour":0.277778,
        "kilowatt-hour":0.000277778,
      },
    "watthour":{
        "watthour":1,
        "kilowatt-hour":0.001,
        "joule":3600,
        "kilojoule":3.6,
    },
    "kilowatt-hour":{
        "kilowatt-hour":1,
        "watt hour":1000,
        "joule":3.6e+6,
        "kilojoule":3600,
    }
    }

}

function initializeUnits(){
    const selectedConversionType = conversionSelect.value;


    fromUnitEl.innerHTML=''
    toUnitEl.innerHTML=''

    const units = Object.keys(conversionFactors[selectedConversionType]);
    
    units.forEach(unit=>{
        fromUnitEl.innerHTML += `<option value="${unit}">${unit.charAt(0).toUpperCase() + unit.slice(1)}</option>`;     
            toUnitEl.innerHTML += `<option value="${unit}">${unit.charAt(0).toUpperCase() + unit.slice(1)}</option>`;
    
        })
        
  
    convertUnits()
}

function convertUnits(){
    const inputValue = parseFloat(inputEl.value);
    const fromUnit = fromUnitEl.value;
    const toUnit = toUnitEl.value;

    if (isNaN(inputValue)) {
        outputEl.value = ""
        return ;
    }


const selectedConversionType = conversionSelect.value;
const conversionFactor = conversionFactors[selectedConversionType][fromUnit][toUnit];
const convertedValue = inputValue * conversionFactor


outputEl.value = convertedValue;
}

inputEl.addEventListener("input", convertUnits)
fromUnitEl.addEventListener("change", convertUnits)
toUnitEl.addEventListener("change", convertUnits)
conversionSelect.addEventListener("change",()=>{
    initializeUnits()
})
initializeUnits()