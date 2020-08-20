class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :session_token, null: false
      t.string :email, null: false, uniqueness: true
      t.string :password_digest, null: false
    end
     add_index :users, :password_digest, unique: true
    add_index :users, :session_token, unique: true
  end 
end