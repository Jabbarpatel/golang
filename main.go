package main

import (
	"backend/config"
	"backend/routes"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	config.DBConnect()

	PORT := os.Getenv("SERVER_PORT")

	app := fiber.New(fiber.Config{
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			statusCode := fiber.ErrInternalServerError.Code
			if e, ok := err.(*fiber.Error); ok {
				statusCode = e.Code
			}
			c.Set("Cache-Control", "no-cache")
			return c.Status(statusCode).JSON(fiber.Map{
				"status":  "error",
				"message": err.Error(),
			})
		},
	})

	app.Use(recover.New())

	routes.AuthRouter(app.Group("/api/auth"))
	routes.UsersRouter(app.Group("/api/users"))

	app.Listen(":" + PORT)
}
