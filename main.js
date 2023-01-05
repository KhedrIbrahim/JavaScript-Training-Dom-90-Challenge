
//Create 100 Copy of this div with loop

for (let i=0; i < 100; i++) {

    //Creat <Div> includes <h3> and <p>
    let myDiv = document.createElement("div");
    let my_H_three = document.createElement("h3")
    let myPara = document.createElement("p")
    let myText_h3 = document.createTextNode(`${i+1} This is Title of H3 ELements`)
    let myText_p = document.createTextNode(`${i+1}- This is text of Paragraph ELements`)
    let myCommint = document.createComment("This is Our Commint")
    
    
    // Add Class Name To Div
    myDiv.className = "product";
    //Add text to Elements
    my_H_three.appendChild(myText_h3);
    myPara.appendChild(myText_p);
    //Add commint to div
    myDiv.appendChild(myCommint);
    
    
    
    //Append h3 inside div
    myDiv.appendChild(my_H_three);
    //Append para inside div
    myDiv.appendChild(myPara);
    //Append Div to body
    document.body.appendChild(myDiv);
    
}