package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func DBConnect() {
	godotenv.Load()
	MYSQL_PORT := os.Getenv("MYSQL_PORT")
	MYSQL_USER := os.Getenv("MYSQL_USER")
	MYSQL_PASSWORD := os.Getenv("MYSQL_PASSWORD")
	MYSQL_DATABASE := os.Getenv("MYSQL_DATABASE")
	MYSQL_HOST := os.Getenv("MYSQL_HOST")

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE)

	connection,err := gorm.Open(mysql.Open(dsn))
	
	if err != nil {
		fmt.Println("Failed to connect to database!",err)
		return
	}
	DB = connection
	fmt.Println("Database connected successfully!")
}