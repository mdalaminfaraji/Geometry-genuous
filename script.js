let serial =0;
// blog button
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href='questionAnswer.html';
});
// Random color
function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}
document.getElementById('random-color-1').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-1').style.backgroundColor=bg_color;
})
document.getElementById('random-color-2').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-2').style.backgroundColor=bg_color;
})
document.getElementById('random-color-3').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-3').style.backgroundColor=bg_color;
})
document.getElementById('random-color-4').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-4').style.backgroundColor=bg_color;
})
document.getElementById('random-color-5').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-5').style.backgroundColor=bg_color;
})
document.getElementById('random-color-6').addEventListener('mouseover', function(){
    const bg_color=random_bg_color();
    document.getElementById('random-color-6').style.backgroundColor=bg_color;
})

function triangleRhombusPentagonAreaLaw(firstParameter,secondParameter){
    const Area=.5*firstParameter*secondParameter;
   const area=Area.toFixed(2);

     return area;
   
}
function rectangleParallelogramAreaLaw(firstParameter,secondParameter){
    const Area=firstParameter*secondParameter;
    const area=Area.toFixed(2);
    return area;

}
 
function inputField1(id1){
  const inputElementString=document.getElementById(id1).value;
  const inputValue=parseFloat(inputElementString);
  if(isNaN(inputValue)||inputValue<0||inputValue==''){
    console.log(inputValue);
    alert('please enter valid input number id1');
    return;
  }
  else{
return inputValue;
  }
}
function inputField2(id2){
  const inputElementString=document.getElementById(id2).value;
  const inputValue=parseFloat(inputElementString);
   if(isNaN(inputValue)||inputValue<0 ||inputValue==''){
    alert('please enter valid input number id2');
    return;
  }
  else{
return inputValue;
  }
}
function heading(id){
    const Heading=document.getElementById(id).innerText;
    return Heading;
}
// triangle
document.getElementById('btn-triangle').addEventListener('click',function(){
    serial +=1;
   const Heading=heading('triangle');
   const base=inputField1('base-t');
   const height=inputField2('height-t');
   const Area=triangleRhombusPentagonAreaLaw(base, height);
   displayData(serial,Heading, Area);
   
})
document.getElementById('btn-rectangle').addEventListener('click',function(){
    serial +=1;
   const Heading=heading('rectangle');
   const width=inputField1('width-r');
   const length=inputField2('length-r');
   const Area=rectangleParallelogramAreaLaw(width, length);
   displayData(serial,Heading, Area);
   
})
document.getElementById('btn-parallelogram').addEventListener('click',function(){
    serial +=1;
   const Heading=heading('parallelogram');
   const base=inputField1('base-p');
   const height=inputField2('height-p');
   const Area=rectangleParallelogramAreaLaw(base, height);
   displayData(serial,Heading, Area);
   
})

document.getElementById('btn-Rhombus').addEventListener('click',function(){
    serial +=1;
   const Heading=heading('Rhombus');
   const base=inputField1('base-d1');
   const height=inputField2('base-d2');
   const Area=triangleRhombusPentagonAreaLaw(base, height);
   displayData(serial,Heading, Area);
   
})

document.getElementById('pentagon-btn').addEventListener('click',function(){
    serial +=1;
   const Heading=heading("Pentagon");
   const base=inputField1('phase-p');
   const height=inputField2('bottom-b');
   const Area=triangleRhombusPentagonAreaLaw(base, height);
   displayData(serial, Heading, Area);
   
})
document.getElementById('btn-ellipse').addEventListener('click',function(){
    serial +=1;
   const Heading=heading("ellipse");
   const base=inputField1('ellipse-a');
   const height=inputField2('ellipse-b');
   const Area=triangleRhombusPentagonAreaLaw(base, height);
   displayData(serial, Heading, Area);
   
})





function displayData(serialNo, heading, area){
     const container = document.getElementById("table-container");
     if(isNaN(area)){
        return;
     }
      const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serialNo}</td>
    <td>${heading}</td>
    <td>${area}cm<sup>2</sup></td>
    <td>
    <button class="btn btn-primary">Convert to m<sup>2</sup></button>
    </td>
    
  `;
  container.appendChild(tr);
}




/*
function displayData(nameOfP, priceOfP, quantityOfp, resultP) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${nameOfP}</td>
    <td>${priceOfP}</td>
    <td>${quantityOfp}</td>
    <td>${resultP}</td>
    <td>
    <button class="btn btn-sm btn-red-500">Square</button>
    </td>
    
  `;
  container.appendChild(tr);
  document.getElementById("total-product").innerText = serial;
}

*/
