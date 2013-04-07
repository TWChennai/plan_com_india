data = CSV.read(Rails.root.join('lib/tasks/smalldata.csv'))
d = Date.parse('01-01-2010')
data.each do |line|  
  district = line[0]
  22.times do |i|
    count = line[i]
    p d
    p district + ", Karnataka"
    p count
    p i
    Disease.create!(:occurence_date => d, :address => district + ", Karnataka", :affect_count => count)
    d = d + 7.days
  end
  d = Date.parse('01-01-2010')
end
