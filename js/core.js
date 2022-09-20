
$(document).ready(core_init);
window.semantic_init = core_init;

function core_init() {

    $('.climbButton').on('click', progress);
    $('#resetButton').on('click', reset);



    $('#bar').progress({
      label: 'ratio',
      text: {
        ratio: '{value} / {total}'
      }
    })
  ;

};

function progress(btn){
    let value = +btn.target.value;
    $('#bar').progress('increment', value);
}

function reset(btn){
    $('#bar').progress(reset);
}