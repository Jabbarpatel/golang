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
	Token := strings.Split(Headers, " ")[1]
	fmt.Println(Token)
	return c.Next()
}

func GenerateJWT(UserName string, Role string) string {
	Claims := jwt.MapClaims{
		"UserName": UserName,
		"Role":     Role,
		"exp":      time.Now().Add(time.Hour * 24).Unix(),
		"iat":      time.Now().Unix(),
	}
	Token := jwt.NewWithClaims(jwt.SigningMethodHS256, Claims)
	SignedToken, _ := Token.SignedString(JWT_KEY)
	return SignedToken
}
