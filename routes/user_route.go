package routes

import (
	"backend/controllers"
	"backend/services"

	"github.com/gofiber/fiber/v2"
)

func UsersRouter(Router fiber.Router) {

	Router.Get("/getusers", func(c *fiber.Ctx) error {
		users := controllers.GetAllUsers()
		return c.JSON(users)
	})

	Router.Get("/getuser/:id", func(c *fiber.Ctx) error {
		id, _ := c.ParamsInt("id")
		user, err := services.GetUserById(id)
		if err != "" {
			return c.JSON(err)
		}
		return c.JSON(user)
	})

}
