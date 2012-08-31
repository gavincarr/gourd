<!DOCTYPE html>
<html>
<head>
<title><% $defaults->{title} %></title>
<link rel="stylesheet" type="text/css" href="/screen.css">
</head>
<body>
% for my $graph (sort glob("graphs/[0-9]*.yml")) {
<& graph.mi, defaults => $defaults, file => $graph &>
% }
</body>
</html>
<%init>
use YAML qw(LoadFile);
my $defaults = LoadFile('graphs/defaults.yml');
</%init>
% # vim:ft=mason
