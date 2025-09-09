//Syntax to write switch case

/* switch (key) { 
    case value:
        
        break;

    default:
        break;
}
 */

const month = "march"

switch (month) {
    case "jan":                   // Switch statement is Case Sensitive -> means use all different data types in their format such as "string", num , etc.
        console.log("January");
        break;                
    case "feb":
        console.log("feb");
        break;
    case "march":                         // Break Statement is used to terminate the execution  followed after the case is matched 
                                           // If break is not used  it will execute all the cases after it except the default case
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
