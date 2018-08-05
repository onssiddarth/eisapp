$(function(){
	var widgets = $('.widgets-js .widget');
	var widgetsCount = widgets.length;
	var windowWidth = 0;
	var mediaQueryColumn = 1280;
  var columns = 3;

  var columnsInit = (function(){
    var html = '';
    for (var i = 0; i < columns; i++) {
      html += '<div class="widget-col widget-col-' + i + '"></div>';
    }
    $('.widgets-js').append(html);
  })();

	var packWidgets = function() {
		var columnTemp = 0;
    columns = 1 + (windowWidth > mediaQueryColumn);

		for (var i=0; i < widgetsCount; i++) {
			var $self = widgets.filter('[data-order='+i+']');

			if ($self.css('display') != 'none') {
				$self.appendTo('.widget-col-'+columnTemp);
				columnTemp == columns ? columnTemp = 0 : columnTemp++;
			}
		}
	};

	$(window).resize(function(){
		windowWidth = window.innerWidth;
		packWidgets();
	});
	$(window).resize();

	$('.widget-header').on('click', '.widget-close', function(event){
		event.preventDefault();

		var $self = $(this);

		$self.closest('.widget').hide();
		packWidgets();
	});

	$('.widgetsReload').on('click', function(event){
		event.preventDefault();

		widgets.show();
		packWidgets();
	});


  $(".widget-col").sortable({
    connectWith: ".widget-col",
    handle: ".widget-move",
    revert: "invalid",
    stop: function(event, ui) {
      var item = ui.item;
      var parent = item.closest(".widget-col");
      var orderOld = item.data("order");
      var order = parent.index() + (item.index() * (columns + 1));

      if (orderOld < order) {
        for (var i = orderOld, $self; i < widgetsCount; i++) {
          $self = widgets.filter('[data-order='+(i+1)+']');
          $self.attr("data-order", i);
        }
        for (var i = widgetsCount, $self; i >= order; i--) {
          $self = widgets.filter('[data-order='+i+']');
          $self.attr("data-order", $self.data("order") + 1);
        }
        item.attr("data-order",order);
      }

      packWidgets();
    }
  });

});
