# PHASE 2
def convert_to_int(str)
  # unless Integer(str).is_a?(Integer)
  #   raise ArgumentError.new "Not and integer"
  begin
    x = Integer(str)
  rescue ArgumentError => e
    puts "Cant convert to integer #{e}"
    # return nil
  end
  x
end

# class IntegerError < ArgumentError

# end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  elsif maybe_fruit == "coffee"
    raise Coffee_Error.new("WOW COFFEEE")
  else
    raise FruitError.new("EWWWwwwwWWW ROARRRR, I hate #{maybe_fruit}. MUNCH MUNCH TIME ON YOU")
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"
  begin
  puts "Feed me a fruit! (Enter the name of a fruit:)"
  maybe_fruit = gets.chomp
  reaction(maybe_fruit) 
  rescue Coffee_Error => error
    puts "#{error}"
    retry
  rescue FruitError => error
    puts "#{error}"
  ensure
    puts "I love eating things and being a monster"
  end
    

end  

class FruitError < StandardError

end

class Coffee_Error < StandardError
  
end

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    
    if yrs_known < 5
      raise NotBestie.new("I have only known you for #{yrs_known} year, that's not enough time")
    elsif name.length <= 0 
      raise NoName.new("You didnt write down your best friend's name.")
    elsif fav_pastime.length  <= 0
      raise PastTime.new("Did you forget our favorite pastime?")
    end
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    @name = name
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known} years. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose what we do. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end

class NotBestie < RuntimeError
  
end

class NoName < StandardError
end

class PastTime < StandardError

end


