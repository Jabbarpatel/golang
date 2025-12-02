package main

import (
	"backend/config"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
)
	

func main(){
	godotenv.Load()
	config.DBConnect()

	PORT:=os.Getenv("SERVER_PORT")
	app:=fiber.New()
	
	app.Listen(":" + PORT)
}