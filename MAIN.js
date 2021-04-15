student_Array=[];
function submit(){
    name1=document.getElementById("name1").value;
    student_Array.push(name1);
    name2=document.getElementById("name2").value;
    student_Array.push(name2);
    name3=document.getElementById("name3").value;
    student_Array.push(name3);
    name4=document.getElementById("name4").value;
    student_Array.push(name4);
    console.log(student_Array);
    document.getElementById("result").innerHTML=student_Array;
    document.getElementById("btm1").style.display="none"
    document.getElementById("btm2").style.display="inline-block"
}
function sorting(){
    student_Array.sort();
    document.getElementById("result").innerHTML=student_Array;
}