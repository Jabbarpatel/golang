package routes

import (
	"backend/types"

	"github.com/gofiber/fiber/v2"
)

func AuthRouter(Router fiber.Router) {

	Router.Post("/login", func(c *fiber.Ctx) error {
		var paload types.LoginRequestElements
		if err := c.BodyParser(&paload); err != nil {
			return err
		}
		return c.JSON(paload.UserName)
	})
}
