require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.
class SQLObject  
  def self.columns
      return @columns if @columns
      
      ans = DBConnection.execute2(<<-SQL)
        SELECT
          *
        FROM
          #{self.table_name}

        LIMIT 0

        SQL

        @columns = ans.first.map(&:to_sym)

    end

  def self.finalize!
    
    self.columns.each do |name|

      define_method("#{name}") do
        self.attributes[name]
      end
      
      define_method("#{name}=") do |val|
        self.attributes[name] = val
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
    # ...
  end

  def self.table_name
    @table_name ||= 'cats'
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    params.each do |k, v|
      if !self.class.columns.include?(k) 
        raise "unknown attribute #{k}"
      else   
        self.send("#{k}=v") = v  #use the readers/writers from our finalize! method, since that's been run already ;)   
      end
    end
  end

  def attributes
    @attributes ||= Hash.new(0)
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
