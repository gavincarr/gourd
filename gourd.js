var refresh_timeout = 60000;

// Munge from parameter on graph images and links
function munge_graph_from_parameters(from, omit_history) {
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

// Refresh images
function refresh_images() {
  var timestamp = Math.floor(new Date().getTime() / 1000);
  $("span.graph img").each(function() {
    var src = $(this).attr('src');
    src.replace(/[&;]ts=\d+/, '');
    $(this).attr('src', src + '&ts=' + timestamp);
  });
}

$(document).ready(function() {
  setInterval(function() { refresh_images() }, refresh_timeout);

  // Handle from parameter in query
  var query = window.location.search;
  var match = query.match(/[?&;]from=([^&;]+)/);
  if (match) {
    munge_graph_from_parameters(match[1], true);
  }

  // click handler for nav links
  $(".navitem").click(function() {
    munge_graph_from_parameters($(this).data("from"));
    return false;
  });
});
