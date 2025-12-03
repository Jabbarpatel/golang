package routes

import (
	"backend/controllers"

	"github.com/gofiber/fiber/v2"
)

func UsersRouter(Router fiber.Router) {

	Router.Get("/getusers", func(c *fiber.Ctx) error {
		users := controllers.GetAllUsers()
		return c.JSON(users)
	})
}
