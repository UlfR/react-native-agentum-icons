require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|

  s.name           = "RNAgentumIcons"
  s.version        = version
  s.summary        = "Customizable Icons for React Native with support for NavBar/TabBar, image source and full styling."
  s.homepage       = "https://github.com/UlfR/react-native-agentum-icons"
  s.license        = "MIT"
  s.author         = { "Joel Arvidsson" => "joel@oblador.se" }
  s.platform       = :ios, "7.0"
  s.source         = { :git => "https://github.com/UlfR/react-native-agentum-icons.git", :tag => "v#{s.version}" }
  s.source_files   = 'RNAgentumIconsManager/**/*.{h,m}'
  s.resources      = "Fonts/*.ttf"
  s.preserve_paths = "**/*.js"
  s.dependency 'React'

end
