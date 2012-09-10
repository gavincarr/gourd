
task :default => 'graphs/html/index.html'
task :all => [ :default, :sync ]

file 'graphs/html/index.html' => FileList['index.mc', 'graphs/defaults.yml', 'graphs/[0-9]*.yml'] do |t|
  sh "mason2.pl index.mc >| #{t.name}"
end

task :sync do
  sh "rsync -aL --progress screen.css graphs/html/* www.example.com:/var/www/html/gourd"
end

