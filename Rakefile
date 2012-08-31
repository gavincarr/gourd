
task :default => [ 'html/index.html', :sync ]

file 'html/index.html' => FileList['index.mc', 'graphs/defaults.yml', 'graphs/[0-9]*.yml'] do |t|
  sh "mason2.pl index.mc >| #{t.name}"
end

task :sync do
  sh "rsync -aL --progress html/* mercury:/var/www/html/sysmetrics/gourd"
end

