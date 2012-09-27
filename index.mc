<%class>
has 'dir'   => ( required => 1 );
</%class>
<!DOCTYPE html>
<html>
<head>
<title><% $defaults->{title} %></title>
<link rel="stylesheet" type="text/css" href="screen.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script src="gourd.js"></script>
</head>
<body>
<& nav.mi, from => $defaults->{from}, periods => $defaults->{periods} &>
<div class="graphs">
% for my $graph (sort glob($.dir . "/[0-9]*.yml")) {
<& graph.mi, defaults => $defaults, file => $graph &>
% }
</div>
</body>
</html>
<%init>
use YAML qw(LoadFile);
my $defaults = LoadFile($.dir . '/defaults.yml');
</%init>
% # vim:ft=mason
