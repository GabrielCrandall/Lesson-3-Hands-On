let highSchoolGrade = 11;
let yourGrade;

function switchCase() {
    switch (highSchoolGrade) {
        case 9:
            yourGrade = "Freshman";
            break;
        case 10:
            yourGrade = "Sophomore";
            break;
        case 11:
            yourGrade = "Junior";
            break;
        case 12:
            yourGrade = "Senior";
            break;
        default:
            yourGrade = "Invalid";
    }
    console.log(yourGrade);
}

function name() {
    let firstName;
    firstName === "John" ? document.getElementById("demo").innerHTML = "Hello John!" : document.getElementById("demo").innerHTML = "Hello Human!";
}

switchCase();
name();