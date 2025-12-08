package auth_service

import (
	"backend/controllers"
	"backend/exceptions"
	"backend/middlewares"
	"backend/utils"

	"github.com/gofiber/fiber/v2"
)

func Login(UserName string, Password string) string {
	User := controllers.GetUserByName(UserName)
	if User == nil {
		panic(fiber.NewError(fiber.ErrConflict.Code, exceptions.InvalidCredentials()))
	}

	ValidPassword := utils.VerifyHashedString(User.Password, Password)
	if !ValidPassword {
		panic(fiber.NewError(fiber.ErrBadRequest.Code, exceptions.InvalidCredentials()))
	}

	token := middlewares.GenerateJWT(UserName, User.Role)
	return token
}
