// //method to get all data
// async function get(){
//     const response=await fetch("http://localhost:8080/getAll");
//     const data = await response.json();
//     console.log(data);
// }
// get();
// ================================================================================================
// //post request
// async function postEmployeeData() {
//     const obj1 = {
//         name: "John Doe",
//         salary: 50000
//     };

//     const response = await fetch('http://localhost:8080/save', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'  // Set Content-Type as JSON
//         },
//         body: JSON.stringify(obj1)  // Convert the JavaScript object to JSON string
//     });
//     const data= await response.json();
//     console.log(data);
// }
// postEmployeeData();
// ==============================================================================================

// //put request
// async function putEmployeeData() {
//     const obj1 = {
//         name: "John",
//         salary: 60000
//     };

//     const response = await fetch('http://localhost:8080/put/3', {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'  // Set Content-Type as JSON
//         },
//         body: JSON.stringify(obj1)  // Convert the JavaScript object to JSON string
//     });
//     const data= await response.json();
//     console.log(data);
// }
// putEmployeeData();
// ===================================================================================================

//delete request
async function deleteEmployeeData() {

    const response = await fetch('http://localhost:8080/delete/6', {
        method: 'Delete' 
    });
    const data= await response.text();
    console.log(data);
}
deleteEmployeeData();