
# Echo shall commands
verbose(true)

# Create graphs/*.html file targets
html = []
Dir.glob('graphs/*') do |dir|
  next if not File.directory? dir

  html.push "#{dir}.html"

  file "#{dir}.html" => FileList['index.mc', 'graph.mi', "#{dir}/defaults.yml", "#{dir}/[0-9]*.yml"] do |t|
    sh "mason2.pl --args '{\"dir\":\"#{dir}\"}' index.mc >| #{t.name}"
  end
end

task :default => html
task :all => [ :default, :push ]

task :push do
# sh "rsync -aL --progress screen.css gourd.js graphs/*.html www.example.com:/var/www/html/gourd"
end

