package routes

import (
	"backend/constants"
	"backend/services/auth_service"
	"backend/types"

	"github.com/gofiber/fiber/v2"
)

func AuthRouter(Router fiber.Router) {
	Router.Post("/login", func(c *fiber.Ctx) error {
		var Payload types.LoginRequestElements
		if err := c.BodyParser(&Payload); err != nil {
			return err
		}

		UserName := Payload.UserName
		Password := Payload.Password
		Token, err := auth_service.Login(UserName, Password)
		if err != nil {
			return err
		}
		return c.Status(constants.STATUS_CODES.OK).JSON(Token)
	})
}
