
//responsive nav bar
const icontrigger = document.querySelector('#iconTriger')
const icon = document.querySelector('#icon ')
const menutrigger = document.querySelector('.nav-ul')

icontrigger.addEventListener('click', () =>{
  if(icon.classList.contains('fa-bars')){
    icon.classList.remove('fa-bars')
    icon.classList.add('fa-close')
    menutrigger.classList.add('show')
    menutrigger.classList.remove('hide')
  }
  else{
    icon.classList.add('fa-bars')
    icon.classList.remove('fa-close')
    menutrigger.classList.remove('show')
    menutrigger.classList.add('hide')
  }
})

//scroll animation
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//for gmail elasticemial
function Submit(){
    var Gmail = document.getElementById("Gmail").value
    var Name = document.getElementById("fname").value
    var MAIL = document.getElementById("MAIL").value
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alinsubtopher.016@gmail.com",
        Password : "BA0B2301DB14A64546650D0C5198B061DB6E",
        To : 'alinsubtopher16@gmail.com',
        From : Gmail,
        Subject : "From my porfolio",
        Body : "Name:"+ Name + 
                "<br> Gmail:" + Gmail +
                "<br> Message:" + MAIL
    }).then(
      message => alert(message)
    );

}