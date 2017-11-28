json.email @user.email
json.topics @user.topics
json.id @user.id
json.firstName @user.first_name
json.lastName @user.last_name
json.userName @user.first_name + " " + @user.last_name
json.upvotes @user.upvotes pluck(:id)
