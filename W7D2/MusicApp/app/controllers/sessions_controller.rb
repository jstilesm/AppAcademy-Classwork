class SessionsController < ApplicationController
    # before_action :require_no_user!, only: %i(create new)
    # debugger
    def create
        user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger
        if user.nil?
            flash.now[:errors] = ['Incorrect Username and/or password']
            render :new
        else
            # debugger
            login_user!(user)
            render json: user
        end
    end
    
    def destroy
        logout_user!
        redirect_to new_session_url
    end

    def new
        render :new
    end
end
