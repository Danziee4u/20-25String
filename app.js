// Question 1

    document.write("<h3>Question 1</h3>");
    var firstNameQ1 = prompt("Enter First Name");
    var lastNameQ1 = prompt("Enter Last Name");
    var fullName = firstNameQ1 + lastNameQ1;
    document.write("Welcome " + fullName);
    

// Question 2

    document.write("<h3>Question 2</h3>");
    var inputQ2 = prompt("Enter Your Favourite Mobile Name");
    document.write("Your Favourite Mobile Is : " + inputQ2 + "<br>");
    document.write("Length Of String : " + inputQ2.length);

// Question 3

    document.write("<h3>Question 3</h3>");
    var strQ3 = "Pakistani";
    document.write("String : " +strQ3 + "<br>");
    document.write("Index Of 'n' : " + strQ3.indexOf("n"));

// Question 4

     document.write("<h3>Question 4</h3>");

     var strQ4 = "Hello World";
     document.write("String : " +strQ4 + "<br>");
     document.write("Index Of 'n' : " + strQ4.lastIndexOf("l"));
    
// Question 5

    document.write("<h3>Question 5</h3>");
    var strQ5 = "Pakistani";
    document.write("String : " +strQ5 + "<br>");
    document.write("Character At Index 3  : " + strQ5.charAt(3));


// Question 6
    
        document.write("<h3>Question 6</h3>");
        var firstNameQ6 = prompt("Enter First Name");
        var lastNameQ6 = prompt("Enter Last Name");
    
        document.write(firstNameQ6.concat(lastNameQ6));

// Question 7

    document.write("<h3>Question 7</h3>");
    var strQ7 = "Hyderabad"
    document.write("City : " + strQ7 + "<br>");
    document.write("After Replacement : " + strQ7.replace("Hyder","Islam"));

// Question 8

    document.write("<h3>Question 8</h3>");
    var messageQ8 = "Ali and Sami are best friends. They play cricket and football together.";
    document.write("Message : " + messageQ8 + "<br>");
    document.write("After Replacement : " + messageQ8.replace(/and/gi,"&"));


// Question 9

    document.write("<h3>Question 9</h3>");
    
    var strQ9 = "420";
    
    document.write("Value : " + strQ9 + "<br>" );
    document.write("Type : " + typeof strQ9 + "<br>");
    
    var xQ9 = parseInt(strQ9,420);
    
    document.write("Value : " + strQ9 + "<br>" );
    document.write("Type : " + typeof xQ9);
    

// Question 10 

    var inputQ10 = prompt("Enter URL");
    var domain = inputQ10.slice(4);

    document.write("URL : " + inputQ10 + "<br>");
    document.write("Domain : " + domain);

// Question 11

    var inputQ11 = prompt("Enter Any Noun");
    var capitalQ11 = inputQ11.toUpperCase();

    document.write("User Input : " + inputQ11 + "<br>");
    document.write("Upper Case : " + capitalQ11);

// Question 12 

        var inputQ12 = prompt("Enter Any Noun");
        var capitalQ12 = inputQ12.toLowerCase();

        document.write("User Input : " + inputQ12 + "<br>");
        document.write("Lower Case : " + capitalQ12);

// Question 13 

        var inputQ13 = prompt("Enter Any Noun");
        var firstLQ13 = inputQ13.charAt(0);
        var restLQ13 = inputQ13.slice(1);

        document.write("User Input : " + inputQ13 + "<br>");
        document.write("Title Case : " + firstLQ13.toUpperCase() + restLQ13.toLowerCase());

// Question 14 

    var numQ14 = 35.36;
    var strQ14 = numQ14.toString();
    var firstLQ14 = strQ14.slice(0,2);
    var lastLQ14 = strQ14.slice(3);
    document.write("Number : " + numQ14 + "<br>");
    document.write("Result : " + firstLQ14 + lastLQ14);


// Question 15 

    var aQ15 = "3";
    var bQ15 = "3";
    var xQ15=aQ15+bQ15;

    document.write("a is " + aQ15 + "<br>");
    document.write("b is " + bQ15 + "<br>");
    document.write("a+b is " + xQ15);

// Question 16 

        var aQ16 = "3";
        var bQ16 = "3";
        var xQ16=aQ16-bQ16;

        document.write("a is " + aQ16 + "<br>");
        document.write("b is " + bQ16 + "<br>");
        document.write("a-b is " + xQ16);
    

// Question 17 

    var res = String.fromCharCode(33);
    document.write(res);

    var inputQ17 = prompt("Enter Name");
    for ( var i = 0; i< inputQ17.length ; i++)
    {
        if(inputQ17)
    }

// Question 18 

    
    document.write("<h3>Question18</h3>");
    var arrBakery = ["cake" , "apple pie", "cookie" , "chips" ," patties"];
    var inputBakery = prompt("Welcome To Danziee's Bakery. :) What Do You Want To Order");
    
    for (var i=0 ; i < arrBakery.length ; i++)
    {
        if (inputBakery.toLowerCase() === arrBakery[i])    
        {
            document.write(inputBakery + " Is Avilable At Index " + i + " In Our Bakery.");   
            break;
        }
        // else
        // {
        //     document.write(" We're Sorry . " + inputBakery + " Is Not Avilable In Our Bakery.");
        //     break;
        // }
    }


// Question 19 

    document.write("<h3>Question19</h3>");
    var input1Q19 = prompt("Enter First Noun To Compare");
    var input2Q19 = prompt("Enter Second Noun To Compare");

    if (input1Q19.length > input2Q19.length)
    {
        document.write(input1Q19 + " Is Greater Than " + input2Q19 + " In Length");
    }     

    else if (input1Q19.length === input2Q19.length)
    {
       document.write(input1Q19 + " Is Equal To " + input2Q19 + " In Length"); 
    }

    else if(input1Q19.length < input2Q19.length )
    {
        document.write( input2Q19 + " Is Greater Than " + input1Q19 + " In Length")
    }


Question 20 

// Question 21 

    var strQ21 = "University Of Karachi";
    var tempQ21 = strQ21.split("");

    for (var i=0; i < strQ21.length ; i++)
    {
        document.write(tempQ21[i] + "<br>");
    }


// Question 22

    var inputQ22 = prompt("Ener Any Noun");
    var tempQ22 = inputQ22.split("");

    document.write("User Input : " + inputQ22 + "<br>");
    document.write("Last Character Of Input : " + tempQ22[inputQ22.length-1]);

// Question 23

    var strQ23 = "the quick brown fox jumps over the lazy dog.";
    var tempQ23 = strQ23.split(" ");
    var count = 0;
    
    for (var i=0; i< strQ23.length ; i++)
    {
        if(tempQ23[i]==="the")
        {
            count++;
        }
    }
    document.write("the quick brown fox jumps over the lazy dog.");
    document.write("<br>");
    document.write("There Are " + count+ " Two Occurance Of Word 'the' . ");

// Question 24

    var strQ24 = "pakistan" ;
    var tempQ24 = strQ24.split("");
    var countVQ24 = 0;
    var countCQ24 = 0;
    document.write("Given String : " + strQ24 + "<br>");

    for (var i=0; i<strQ24.length; i++)
    {
        if(tempQ24[i]==="a" || tempQ24[i]==="e" || tempQ24[i]==="i" || tempQ24[i]==="o" || tempQ24[i]==="u" )
        {
            countVQ24++;
        }
        else
        {
            countCQ24++;
        }
    }

    document.write("Vowels : " + countVQ24 + "<br>");
    document.write("Consonents : " + countCQ24 + "<br>");