package main

import (
	"backend/config"
	"backend/routes"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	config.DBConnect()

	PORT := os.Getenv("SERVER_PORT")
	app := fiber.New()

	routes.UsersRouter(app.Group("/api/users"))

	app.Listen(":" + PORT)
}
