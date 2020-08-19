class AttrAccessorObject
  def self.my_attr_accessor(*names) #names will be instance vars for us to CREATE a get/se
    # ...
    names.each do |name|
      
      define_method(name)  do 
        instance_variable_get("@#{name}")  
      

      end
        
      define_method("#{name}=") do  #setter 
        instance_variable_set("@#{name}", val)
      end
  
    end
  end
end
