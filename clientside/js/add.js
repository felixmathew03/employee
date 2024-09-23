document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const res=await fetch("http://localhost:3000/api/countemployees");
    let data=await res.json();

    console.log(data.msg);
    count=parseInt(data.msg)+1000;
    console.log(count);
    const empid="NOV"+count;
    const name=document.getElementById("name").value;
    const salary=parseInt(document.getElementById("salary").value);
    const experience=document.getElementById("experience").value;
    const designation=document.getElementById("designation").value;
    const phone=parseInt(document.getElementById("phone").value);
    const email=document.getElementById("email").value;
    fetch("http://localhost:3000/api/addemp",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({empid,name,salary,experience,designation,phone,email})
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
            window.location.href="../index.html"
        }else if(res.status==400){
            alert("Phone no. already exist")
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})