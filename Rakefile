
task :default => 'graphs/html/index.html'
task :all => [ :default, :push ]

file 'graphs/html/index.html' => FileList['index.mc', 'graphs/defaults.yml', 'graphs/[0-9]*.yml'] do |t|
  sh "mason2.pl index.mc >| #{t.name}"
end

task :push do
  sh "rsync -aL --progress screen.css gourd.js graphs/html/* www.example.com:/var/www/html/gourd"
end

