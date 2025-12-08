package routes

import (
	"backend/services/auth_service"
	"backend/types"
	"fmt"

	"github.com/gofiber/fiber/v2"
)

func AuthRouter(Router fiber.Router) {

	Router.Post("/login", func(c *fiber.Ctx) error {
		var Payload types.LoginRequestElements
		if err := c.BodyParser(&Payload); err != nil {
			fmt.Println(Payload)
			panic(fiber.NewError(fiber.ErrBadRequest.Code, err.Error()))
		}

		UserName := Payload.UserName
		Password := Payload.Password
		Token := auth_service.Login(UserName, Password)
		return c.Status(200).JSON(Token)
	})
}
