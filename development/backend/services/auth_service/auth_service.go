package auth_service

import (
	"backend/controllers"
	"backend/exceptions"
	"backend/middlewares"
	"backend/utils"
)

func Login(UserName string, Password string) (string, error) {
	User := controllers.GetUserByName(UserName)
	if User == nil {
		return "", exceptions.InvalidCredentials()
	}

	ValidPassword := utils.VerifyHashedString(User.Password, Password)
	if !ValidPassword {
		return "", exceptions.InvalidCredentials()
	}

	token := middlewares.GenerateJWT(UserName, User.Role)
	return token, nil
}
