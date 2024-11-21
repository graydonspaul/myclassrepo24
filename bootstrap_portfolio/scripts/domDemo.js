console.log(document); 

function testTheDom(){ 
    console.log("testing the dom"); 
    
    var nodes = document.getElementsByTagName("li"); 
    console.log(nodes); 
    
    for (let node of nodes) { 
        console.log(node.textContent); 
    }

    var checkingNode = document.getElementById("checking"); 
    // console.log(checkingNode.textContent); 
    // checkingNode.textContent = "Changed!"; 
    balanced = parseInt(checkingNode.textContent); 
    balance += 100; 
    checkingNode.textContent = balance; 

}

function depositChecking(){ 
    // get value of html element with id checking
    var td = document.getElementById('checking'); 
    // convert string to int
    checking = parseInt(td.textContent,10); 
    // increase value by 100 
    checking += 100; 
    // set new value 
    td.textContent = checking; 
}

function depositSavings() { 
    // get value of html element with id savings
    var td = document.getElementById('savings');
    // convert string to int
    var savings = td.textContent; 
    // if savings = 0 we need to change the title from alert back to bank account
    savings = parseInt(savings,10); 
    if (savings == 0){ 
        var title = document.getElementById('bankAccountTitle');
        title.textContent = "Bank Account"; 
    }
    // increase to 100 
    savings += 100; 
    // set to new value
    td.textContent = savings; 
}

function emptySavings() { 
    // empty the savings by changing the balance to 0 
    // h4 bank accounts header should be changed to alergy savings emtpy 
    // h4 header should go back to bank accounts after money ahs been deposited again
    var td = document.getElementById('savings'); 
    td.textContent = 0; 
    var title = document.getElementById('bankAccountTitle'); 
    title.textContent = "Alert: savings empty";  
}