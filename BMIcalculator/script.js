function BMI() 
{
    let h = document.getElementById('h').value;
    let w = document.getElementById('w').value;

    if (h == "" && w == "") {
        document.getElementById('result').innerHTML = "Please fill the above fields";
    } else {

        let result = w / (h / 100) / (h / 100);

        result = result.toFixed(2);
        document.getElementById('result').innerHTML = result;

        if (result < 18.5) {
            document.getElementById('result').innerHTML = `${result} Underweight`;
        }
        if (result >= 18.5 && result <= 24.9) {
            document.getElementById('result').innerHTML = `${result} Normal Weight`;
        }
        if (result >= 25 && result <= 29.9) {
            document.getElementById('result').innerHTML = `${result} Overweight`;
        }
        if (result >= 30) {
            document.getElementById('result').innerHTML = `${result} Obesity`;
        }
    }
}
