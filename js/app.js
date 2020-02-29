    const startButton = document.getElementById("start");
    const fibonacciList = document.querySelector(".fibonacci_List")

    //Creating array with Fibonacci sequence 
    function fibonacciNumbers(){
        let sequenceLength = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;   //generate a random number between 1 - 1000
        let fibonacciNumbers = [];
        
        for (let i=0; i<=sequenceLength; i++) {
            if (i === 0 ) { fibonacciNumbers.push(0)};
            if (i === 1) { fibonacciNumbers.push(1)};
            if (i >= 2) {fibonacciNumbers.push(fibonacciNumbers[i-1] + fibonacciNumbers[i-2])};
        }

        return fibonacciNumbers
    }

    //Maping Fibonacci numbers into next HTML rows
    function showFibonacciNumbers(numbers) {
        const fragment = document.createDocumentFragment();
        
        numbers.map(function(e,i){
            let listItem = document.createElement("h3");
            listItem.innerText = e;
  
            listItem.style.animationDelay = i * 3 + "s"; // displaying next numbers evry 3s
            fragment.appendChild(listItem)   
        })
    
        fibonacciList.appendChild(fragment)  
        
    }

    //Deleting previously generated sequence  
    function deleteSequence() {
        
        fibonacciList.querySelectorAll("h3") ?  fibonacciList.textContent = '' : fibonacciList         
    }

    //Generating new Fibonacci sequence
    function getFibonacciNumbers() {
        deleteSequence()
        showFibonacciNumbers(fibonacciNumbers())
    }

    
    startButton.addEventListener("click", getFibonacciNumbers);