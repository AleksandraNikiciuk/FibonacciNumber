    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const fibonacciList = document.querySelector(".fibonacci__list");
    const userNumber = document.getElementById("fnumber");
    const prompt = document.getElementById("prompt");

    
    //Creating array with Fibonacci sequence
    function createFibonacciNumbers(){
        let fibonacciLength = userNumber.value - 1;
        let fibonacciNumbers = [];
        
        for (let i=0; i<=fibonacciLength; i++){
            if (i === 0) {fibonacciNumbers.push(0)};
            if (i === 1) {fibonacciNumbers.push(1)};
            if (i >= 2) {fibonacciNumbers.push(fibonacciNumbers[i-1] + fibonacciNumbers[i-2])};
        }
        return fibonacciNumbers
    }

    //Maping Fibonacci numbers into next HTML rows
    function showFibonacciNumbers(numbers){
        const fragment = document.createDocumentFragment();     

        numbers.map(function(e,i){
            let listItem = document.createElement("li");
            listItem.innerText = e;
  
            listItem.style.animationDelay = i * 3 + "s"; // displaying next numbers evry 3s
            fragment.appendChild(listItem)   
        })   

        fibonacciList.appendChild(fragment)          
    }

    //Input validating function
    function validateForm(){
        let number = parseFloat(userNumber.value, 10);

        if ( number<=0 || Number.isInteger(number) === false){
            prompt.innerHTML = "Podano niewłaściwą wartość. Podana wartość powinna być dodatnią liczbą całkowitą";        
            prompt.classList.add("alert");
            return false;
        } else {
            prompt.innerHTML = `Liczę ${number} wyraz ciągu Fibonacciego`;
            startButton.disabled="disabled";
            prompt.classList.remove("alert");
            return true;
        }
    }

    function resetFibonacciNumbers(){
        startButton.disabled=false;
        fibonacciList.querySelectorAll("li") ?  fibonacciList.textContent = '' : fibonacciList;
        prompt.innerHTML = "";
        userNumber.value = "";
    }

    //Generating new Fibonacci sequence
    function getFibonacciNumbers(){      
        if (validateForm()){
            let a = createFibonacciNumbers();
            showFibonacciNumbers(a);
        } else {
            return
        };
    }

    startButton.addEventListener("click", getFibonacciNumbers);
    resetButton.addEventListener("click", resetFibonacciNumbers);