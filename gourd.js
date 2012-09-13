function munge_graphs(from, omit_history) {
  if (! omit_history) {
    if (typeof window.history.pushState == 'function') {
      var query = window.location.search.replace(/([?&;]from=)([^&;]+)/, '$1' + from);
      if (query == '') {
        query = '?from=' + from;
      }
      var url = window.location.href.replace(window.location.search, '') + query;
      var title = document.title + ', ' + from;
      window.history.pushState({ title: title, url: url }, title, url);
    }
  }

  // Mark nav as selected
  $('div.nav a.selected').removeClass('selected');
  $('#nav_' + from.substring(1)).addClass('selected');

  $("span.graph").each(function() {
    // Don't update graphs that have explicit from parameters
    if ($(this).data('from') != '') {
      return;
    }

    // Update img src attributes
    $(this).find('img').each(function() {
      var src = $(this).attr('src');
      $(this).attr('src', src.replace(/from=[^&;]+/, 'from=' + from));
    });

    // Update a href attributes
    $(this).find('a').each(function() {
      var href = $(this).attr('href');
      $(this).attr('href', href.replace(/from=[^&;]+/, 'from=' + from));
    });
  });
}

$(document).ready(function() {
  // Handle from parameter in query
  var query = window.location.search;
  var match = query.match(/[?&;]from=([^&;]+)/);
  if (match) {
    munge_graphs(match[1], true);
  }

  // click handler for nav links
  $(".navitem").click(function() {
    munge_graphs($(this).data("from"));
    return false;
  });
});
