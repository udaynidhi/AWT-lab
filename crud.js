const firebaseConfig = {
    apiKey: "AIzaSyD6XKtlWkh4sY3B1DyH343FyfvPC2BmpdM",
  authDomain: "crudoperations-c27b4.firebaseapp.com",
  databaseURL: "https://crudoperations-c27b4-default-rtdb.firebaseio.com",
  projectId: "crudoperations-c27b4",
  storageBucket: "crudoperations-c27b4.appspot.com",
  messagingSenderId: "412893975747",
  appId: "1:412893975747:web:815a9dc609a05fe206be76",
  measurementId: "G-964FX7FS3C"
  };
  firebase.initializeApp(firebaseConfig)
  var dbRef=firebase.database().ref().child("students")
  function createStudent(){
      console.log("Create Student");
      let uname=document.getElementById('uname').value;
      let rno=document.getElementById('rno').value;
      let bns=document.getElementById('bns').value;
      dbRef.child(uname).set({
          uname:uname,
          rno:rno,
          bns:bns
      })
      console.log("User Created Successfully");
  }
  function deleteStudent(){
      console.log("Delete Student");
      let username=window.prompt("Enter the name of the student to be deleted");
      dbRef.child(username).remove();
      console.log(username+" removed");
  }
  function updateStudent(){
    console.log("Update Student");
    let uname=window.prompt("Enter username");
    let rno=window.prompt("Enter rno");
    let bns=window.prompt("Enter branch and section");
    dbRef.child(uname).update({rno:rno,bns:bns});
    console.log("Student Details Updated Successfully");
}
  function displayStudent()
      {
        let uname=document.getElementById('uname').value;
        let rno=document.getElementById('rno').value;
        let bns=document.getElementById('bns').value;
          console.log("Student Details");
          table=document.createElement("TABLE");
          table.border="2";
            dbRef.on('child_added',(snap)=>{
                console.log(snap.key)
                row=table.insertRow(-1)
                cell1=row.insertCell(-1)
                cell2=row.insertCell(-1)
                cell3=row.insertCell(-1)

                cell1.innerHTML=snap.val().uname;
                
                cell2.innerHTML=snap.val().rno;
               
                cell3.innerHTML=snap.val().bns;
            })
            student=document.getElementById("studentList");
            student.appendChild(table)
        }