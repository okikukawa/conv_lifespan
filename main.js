$(document).ready(function(){

  // function setSelectOld(){
  //   let select = document.getElementById('human_age');
  //   for (let i=0;i<90;i++){
  //     let option = document.createElement('option');
  //     option.setAttribute('value',i);
  //     option.innerHTML = i + '歳';
  //     select.appendChild(option);
  //   }
  //   select.value = 25
  // }
  function age_indicate(){
    let age = Number($('#human_age').val());
    let dogAge = age / 7;
    $("#dog_indicate").text(dogAge.toFixed(0));
    $("#cat_indicate").text(dogAge.toFixed(0));

  // const target = document.getElementById('btn');
  // target.addEventListener('click', function() {
  //   const form = document.getElementById('human_age');
  //   const list = document.createElement('li');
  //   console.log(list);
  // },false);
  // function age_indicate(){
  //   let age = Number($('#human_age').val());
    let hamsterAge = age / 34 ;
    $("#hamster_indicate").text(hamsterAge.toFixed(0));
    let monkeyAge = age / 3.4 ;
    $("#monkey_indicate").text(monkeyAge.toFixed(0));
    let turtleAge = age / 1.4 ;
    $("#turtle_indicate").text(turtleAge.toFixed(0));
    let whaleAge = age / 1.4 ;
    $("#whale_indicate").text(whaleAge.toFixed(0));
    let elephantAge = age / 1.3 ;
    $("#elephant_indicate").text(elephantAge.toFixed(0));
    let uniAge = age / 0.425 ;
    $("#uni_indicate").text(uniAge.toFixed(0));
    let kibutsujiAge = age / 0.085 ;
    $("#kibutsuji_indicate").text(kibutsujiAge.toFixed(0));
  }


  $('#human_age').change(function() {
    age_indicate();
  });

  // $(function() {
  //   $('#accordion_target1,#accordion_target2,#accordion_target3').hide();
  //   $('#accordion_btn').on('click', function(){
  //     $(this).nextAll().slideToggle('fast');
  //   });
  // });
});
