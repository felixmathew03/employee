const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");
async function getDonor() {
    const res=await fetch(`http://localhost:3000/api/getemploy/${id}`)
    const employ=await res.json();
    document.getElementById("frm").innerHTML=`
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="${employ.name}">

            <label for="salary">Salary</label>
            <input type="number" id="salary" name="salary" value="${employ.salary}">

            <label for="experience">Experience</label>
            <input type="text" id="experience" name="experience" value="${employ.experience}">

            <label for="designation">Designation</label>
            <input type="text" id="designation" name="designation" value="${employ.designation}">

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" value="${employ.phone}">

            <label for="email">Email</label>
            <input type="email" id="email" name="email" value="${employ.email}">
            <div class="buttons">
                <button >Submit</button>
                <button type="reset">Reset</button>
            </div>
    `
}
getDonor()

document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    try {
        const name=document.getElementById("name").value;
    const age=document.getElementById("age").value;
    const dob=document.getElementById("dob").value;
    const place=document.getElementById("place").value;
    const phone=document.getElementById("phone").value;
    const blood_group=document.getElementById("blood_group").value;
    console.log(name,age,dob,place,phone,blood_group);
    const res=await fetch(`http://localhost:3000/api/editemploy/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age,dob,place,phone,blood_group})
    })
    if(res.status==201){
        alert("Updated")
        window.location.href="../index.html"
    }else{
        alert("error")
    }
    } catch (error) {
        console.log(error);
        
    }
})