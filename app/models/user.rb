require 'bcrypt'

class User < ActiveRecord::Base
  has_many :surveys
  has_many :questions, through: :surveys
  has_many :options, through: :questions
  has_many :answers

  def password=(plaintext)
    if !plaintext.empty?
      self.password_hash = BCrypt::Password.create(plaintext)
    end
  end

  def password
    @password ||= BCrypt::Password.new(password_hash)
  end

  def self.authenticate(email, password)
    @user = self.find_by(email: email)
    return @user if @user and BCrypt::Password.new(@user.password_hash) == password
  end


end
