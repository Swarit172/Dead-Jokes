        // Promises and Async await

const jokes  = document.querySelector("#jokes");
const jokesBtn =  document.querySelector("#jokesBtn");


        // Method - 1
        // // * done through promises
// const generateJokes = () => {
//     //setting the header for response
//     const setHeader = {
//         headers: {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader)
//     //if we get response(promise) then will execute...other wise catch
//     .then((res) =>  res.json() )  //convert data in JSON format
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     }).catch((error) => {
//         console.log(error);
//     })

// }


        // Method - 2
// * now through async await
const generateJokes =  async () => {
            
        //setting the header for response
        try{
            const setHeader = {
                headers: {
                    Accept : "application/json"
                }
            }
            const res = await fetch('https://icanhazdadjoke.com', setHeader)
            const data = await res.json();
            jokes.innerHTML = data.joke;
        }
        catch(err){
            console.log(`the error is ${err}`);
        }
}

jokesBtn.addEventListener('click',generateJokes);
generateJokes();


