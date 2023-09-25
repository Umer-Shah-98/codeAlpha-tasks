document
        .getElementById("convertButton")
        .addEventListener("click", function () {
          // Get selected units and temperature
          const fromUnit = document.getElementById("fromUnit").value;
          const toUnit = document.getElementById("toUnit").value;
          const temperature = parseFloat(
            document.getElementById("temperature").value
          );

          // Perform conversion
          let convertedTemperature;
          if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9) / 5 + 32;
          } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
          } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            convertedTemperature = ((temperature - 32) * 5) / 9;
          } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            convertedTemperature = ((temperature - 32) * 5) / 9 + 273.15;
          } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
          } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            convertedTemperature = ((temperature - 273.15) * 9) / 5 + 32;
          } else {
            convertedTemperature = temperature; // Same units, no conversion needed
          }

          // Display the result
          document.getElementById(
            "result"
          ).textContent = `Converted Temperature: ${convertedTemperature.toFixed(
            2
          )} ${toUnit}`;
        });