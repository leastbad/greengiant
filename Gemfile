source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.3'

gem "rails", "~> 6.1.4"
gem "pg", "~> 1.1"
gem "puma", "~> 5.3.1"
gem "webpacker", "~> 5.4.0"
gem "redis", "~> 4.2.5"
gem "bootsnap", ">= 1.4.4", require: false

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem "pry-rails"
  gem "web-console", ">= 4.1.0"
  gem "listen", "~> 3.3"
  gem "standard", "~> 1.0"
end

group :test do
  gem "capybara", ">= 3.26"
  gem "selenium-webdriver"
  gem "webdrivers"
end

gem "stimulus_reflex", "3.5.0.pre1"
gem "pagy", "~> 3.10.0"
gem "all_futures", "~> 1.0"
gem "redis-session-store", "~> 0.11.3"
