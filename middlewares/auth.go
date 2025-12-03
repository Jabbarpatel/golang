package middlewares

import (
	"fmt"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

var JWT_KEY = []byte("SoftwareDeveloper")

func LoginRequired(c *fiber.Ctx) error {
	Headers := c.Get("Authorization")
	if Headers == "" {
		return c.Status(fiber.StatusUnauthorized).JSON("Missing authorization")
	}
	token := strings.Split(Headers, " ")[1]
	fmt.Println(token)
	return c.Next()
}

func GenerateJWT(UserName string) (string, error) {
	claims := jwt.MapClaims{
		"UserName": UserName,
		"exp":      time.Now().Add(time.Hour * 24).Unix(),
		"iat":      time.Now().Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(JWT_KEY)
}
