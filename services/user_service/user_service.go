package user_service

import (
	"backend/controllers"
	"backend/exceptions"
	"backend/utils"

	"github.com/gofiber/fiber/v2"
)

func CreateUser(UserName string, Password string, CreatedBy string, ContactInfo string, RoleID int) {
	User := controllers.GetUserByName(UserName)
	if User != nil {
		panic(fiber.NewError(fiber.ErrConflict.Code, exceptions.UserAlreadyExists(UserName)))
	}

	ValidRole := controllers.GetRoleById(RoleID)
	if ValidRole == nil {
		panic(fiber.NewError(fiber.ErrBadRequest.Code, exceptions.InvalidRole()))
	}

	HashedPassword := utils.GenerateHashString(Password)
	controllers.CreateUser(UserName, HashedPassword, CreatedBy, ContactInfo, ValidRole.Role)
}
