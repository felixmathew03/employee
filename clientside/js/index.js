const value=localStorage.getItem("Auth");
console.log(value);
async function getEmployees() {
    const res=await fetch("http://localhost:3000/api/getemployees",{headers:{"Authorization":`Bearer ${value}`}});
    const employees=await res.json();
    if (res.status==200){
        document.getElementById("user").innerText=employees.username;
        str=``;
        employees.employees.map((employ)=>{
            str+=`
            <div class="content">
            <a href="./pages/profile.html?id=${employ._id}">
                    <div class="img">
                        <img src="${employ.profile}" alt="${employ.name}">
                    </div>
                    <div class="details">
                        <div class="details">
                            <h2>${employ.name}</h2>
                            <h3>${employ.designation}</h3>
                        </div>
                    </div>
                    </a>
                </div>
            `
        });
        document.getElementById("contents").innerHTML=str;
    }
    else{
        window.location.href="../pages/signin.html"
    }
    
}
getEmployees();


document.getElementById("filter").addEventListener('keyup',async(e)=>{
    try {
        const res=await fetch("http://localhost:3000/api/getemployees");
        const employees=await res.json();
        console.log(employees);
        str=``;
        employees.filter((i)=>i.name.toLowerCase().includes(e.target.value.toLowerCase())).map((employ)=>{
            console.log(employ._id);
            
            str+=`
            <a href="./pages/profile.html?id=${employ._id}">
            <div class="content">
                <div class="img">
                    <img src="${employ.profile}" alt="${employ.name}">
                </div>
                <div class="details">
                    <table> 
                        <tr>
                            <th>Emp-Name</th>
                            <th>Designation</th>
                        </tr>
                        <tr>
                            <td>${employ.name}</td>
                            <td>${employ.designation}</td>
                        </tr> 
                    </table>
                </div>
            </div>
        </a>
            `
        });
        document.getElementById("contents").innerHTML=str;

        } catch (error) {
            console.log(error);
        }
})
function logout() {
    localStorage.removeItem("Auth");
    window.location.href="../pages/signin.html"
}