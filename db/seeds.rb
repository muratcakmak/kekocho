# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
lit = Topic.create(name:"Literature")
tv = Topic.create(name: "TV Series")
fit = Topic.create(name: "Fitness")


$.ajax({
  method: 'get',
  url: 'api/topics'
  })
