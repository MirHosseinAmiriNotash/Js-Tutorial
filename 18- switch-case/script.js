
let role = "admin";

switch (role) {
    case "guest":
        console.log("guest user");
        break;
    case "admin":
        console.log("admin user");
        break;
    default:
        console.log("unknown user");
}

// if(role === "guest"){
//     console.log("guest user");
// }else if(role === "admin"){
//     console.log("admin user");
// }else{
//     console.log("unknown user");
// }