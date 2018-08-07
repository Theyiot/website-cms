odoo.define('cms_form.date_widget', function (require) {
  'use strict';

  require('web.dom_ready');

  // TODO: migrate to snippet animation
  $(document).ready(function () {
    $("input.js_datepicker").each(function () {
      var $input = $(this);
      var options = _.defaults(
        $input.data('params') || {}, {
          useSeconds: false,
          icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down'
          },
          dateFormat: $input.data('format')
        }
      )
      $input.datepicker(options);
      var defaultDate = $input.data('params').defaultDate;
      if (!defaultDate) {
        defaultDate = $input.data('params').defaultToday;
      }
      if (defaultDate && !$input.val()) {
        $input.datepicker(
            "setDate", new Date(defaultDate)
        );
      }
      $input
        .closest('.input-group')
        .find('.js_datepicker_trigger').click(function () {
          $input.datepicker('show');
        });
    });

  });

});
