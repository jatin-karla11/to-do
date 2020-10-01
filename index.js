displayNotes();
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);//displays objects takes string
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));//display string and takes object
    addTxt.value=" ";//blanks after the user has entered the value
    displayNotes();
})
function displayNotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);//displays objects takes string
    }
    let html=" ";
    notesObj.forEach(function(element,index){
        html+=`<div class="my-3 mx-3 noteCard" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete note</button>
        </div>
    </div>`;
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`No Notes created by you  Use add Notes`;
    }
}
function deleteNote(index){
    console.log('i am deleting',index);
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);//displays objects takes string
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    displayNotes();

}
let search=document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();
    console.log('input event occurs',inputVal);
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
      if(cardTxt.includes(inputVal)){
          element.style.display="block";
      }
      else{
        element.style.display="none";
      }
    })
})