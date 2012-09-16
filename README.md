Gourd
=====

Gourd is a minimalist graphite dashboard, generating static html pages
from templates and graph definition files. Gourd can be run on an admin
machine, and the resultant html files pushed to your webserver on changes.
Dynamic behaviour such as period selection and graph refreshes are done
by javascript and jquery.


Setup
-----

Prerequisites: rake, and the following perl modules:

  - Mason
  - Hash::Merge
  - URI
  - URI::Query
  - YAML


Initial setup:

```shell
    # Copy examples to a new directory within 'graphs'.
    cp -r Examples graphs/examples

    # Update defaults
    $EDITOR graphs/examples/defaults.yml

    # Update and/or add additional graphs
    $EDITOR/graphs/examples/[0-9]*.yml

    # Generate html output (will create graphs/examples.html)
    rake

    # Copy graphs/examples.html to your webserver (see 'push' target in Rakefile)
    $EDITOR Rakefile
    rake push
```


Author
------

Gavin Carr <gavin@openfusion.com.au>

Copyright 2012 Gavin Carr.


Licence
-------

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.


