
task :default => 'graphs/html/index.html'

file 'graphs/html/index.html' => FileList['index.mc', 'graphs/defaults.yml', 'graphs/[0-9]*.yml'] do |t|
  sh "mason2.pl index.mc >| #{t.name}"
end

task :sync do
  sh "rsync -aL --progress screen.css graphs/html/* mercury:/var/www/html/sysmetrics/gourd"
end

