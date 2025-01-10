button.addEventListener('click', () => {
    console.log("Button clicked");
    axios.get('https://official-joke-api.appspot.com/jokes/random') // Updated endpoint
    .then(function(response) {
        console.log("API request success");
        button.textContent = "Next";
        funContent.textContent = response.data.setup;
        fun.textContent = "";
        setTimeout(function() {
            fun.textContent = response.data.punchline;
        }, 1000);
    })
    .catch(function(error) {
        console.log("API request failed", error); // Better error handling
    });
});



/*const button=document.getElementById("button");
const funContent=document.getElementById("funContent");
const fun=document.getElementById("fun");

button.addEventListener('onclick',function() {
    console.log("Button clicked");
    axios.get('https://official-api.appspot.com/random_joke')
    .then(function(response){
        console.log("API request success");
        button.textContent = "Next";
        funContent.textContent = response.data.setup;
        fun.textContent = "";
        setTimeout(function(){ 
            fun.textContent = response.data.punchline;
        }, 1000);
    })
    .catch(function(error){ 
        console.log("API request failed", error);
    });
});


/*button.onclick=()=>{
    axios.get('https://official-api.appspot.com/random_joke')
    .then(function(response){
        button.textContent="Next";
        funContent.textContent=response.data.setup;
        fun.textContent="";
        setTimeout(funtion(){
            fun.textContent=response.data.punchline;

        },1000);
    })
    .catch(funtion(error){
        console.log(error);
    });

};*/