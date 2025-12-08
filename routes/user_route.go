package routes

import (
	"backend/constants"
	"backend/controllers"
	"backend/services/user_service"
	"backend/types"

	"github.com/gofiber/fiber/v2"
)

func UsersRouter(Router fiber.Router) {

	Router.Get("/get_users", func(c *fiber.Ctx) error {
		Users := controllers.GetAllUsers()
		return c.Status(200).JSON(Users)
	})

	Router.Post("/create_user", func(c *fiber.Ctx) error {
		var Payload types.CreateUserRequestElements
		if err := c.BodyParser(&Payload); err != nil {
			panic(fiber.NewError(fiber.ErrBadRequest.Code, err.Error()))
		}

		UserName := Payload.UserName
		Password := Payload.Password
		CreatedBy := Payload.CreatedBy
		ContactInfo := Payload.ContactInfo
		RoleID := Payload.RoleID
		user_service.CreateUser(UserName, Password, CreatedBy, ContactInfo, RoleID)
		return c.Status(200).JSON(constants.SUCCESS)
	})
}
