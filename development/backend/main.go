package main

import (
	"os"

	"backend/config"
	_ "backend/docs"
	"backend/middlewares"
	"backend/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/swagger"
	"github.com/joho/godotenv"
)

// @title Fiber API
// @version 1.0
// @description This is a Yellow Book API documentation.
// @host localhost:8088
// @BasePath /api

func main() {
	godotenv.Load()
	config.DBConnect()

	PORT := os.Getenv("BACKEND_PORT")

	app := fiber.New(fiber.Config{
		ErrorHandler: middlewares.ErrorHandler,
	})

	app.Use(cors.New())
	app.Use(recover.New())
	app.Get("/swagger/*", swagger.HandlerDefault)

	routes.AuthRouter(app.Group("/api/auth"))
	routes.UsersRouter(app.Group("/api/users"))

	app.Listen("0.0.0.0:" + PORT)
}
