var quizdata=[
  {
    ques:"Which framework is related to Javascript.",
    a:".net",
    b:"Flask",
    c:"React",
    d:"Django",
    correct:"c"

  },
  {
    ques:"Which is not a Programming language.",
    a:"HTML",
    b:"java",
    c:"C",
    d:"Python",
    correct:"a"
  },
  {
    ques:"Which is not a framework",
    a:"react",
    b:"javascript",
    c:"angular",
    d:"django",
    correct:"b"
  },
  {
    ques:"CSS stands for",
    a:"Cascading Style Sheet",
    b:"color style sheet",
    c:"cascading stand shelf",
    d:"cascading style software",
    correct:"a"
  }
]

var quiz=document.getElementById('quiz');
var ans=document.querySelectorAll('.q');
var question=document.getElementById('question');
var option_a=document.getElementById('a_value');
var option_b=document.getElementById('b_value');
var option_c=document.getElementById('c_value');
var option_d=document.getElementById('d_value');
var submitbtn=document.getElementById('submit');


var currentQue=0;
var quizScore=0;
loadQuiz();



function loadQuiz(){
deselect();
question.innerHTML=quizdata[currentQue].ques;
option_a.innerHTML=quizdata[currentQue].a;
option_b.innerHTML=quizdata[currentQue].b;
option_c.innerHTML=quizdata[currentQue].c;
option_d.innerHTML=quizdata[currentQue].d;
}



function deselect(){
  ans.forEach(ans=>ans.checked=false)
}



submitbtn.addEventListener('click',()=>{
  var selectedopt;
  
  ans.forEach(ans=>{
    if(ans.checked){
      selectedopt=ans.id;
    }
  })
  if(selectedopt==quizdata[currentQue].correct){
    quizScore+=1;
  }
  currentQue++;
 if(currentQue==quizdata.length){
  document.getElementById('quizdiv').innerHTML=`<h1 class="text-center"> You score is ${quizScore}/${quizdata.length}.</h1>`
 }
 else{
  loadQuiz();
 }
})

