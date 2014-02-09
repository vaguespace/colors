$(document).ready(function(){

  //var url = '../php/handleColors.php';

  $(document).on('click', '.scheme', function(){

    var schemeId = $(this).attr('id');

    var url = '/php/handleColors.php';

    var requestData = {'id':schemeId};

    $.post(url,requestData, function(data) {
      $("#schemes").empty().append(data);
    });

  });

  $(document).on('click', '#submit', function(){

    var url = '/php/handleColors.php';

    var o = {'signUp': true};

    var a = $('#signUp').serializeArray();

    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });

    var requestData = o;

    $.post(url,requestData, function(data) {
      $("#schemes").empty().append(data);
    });
  });

});