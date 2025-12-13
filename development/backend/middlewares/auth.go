package middlewares

import (
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

var JWT_KEY = []byte("SoftwareDeveloper")

func VerifyToken(Token string) (jwt.MapClaims, error) {
	ValidToken, err := jwt.Parse(Token, func(t *jwt.Token) (any, error) {
		return JWT_KEY, nil
	})

	if err != nil || !ValidToken.Valid {
		return nil, fiber.NewError(401, err.Error())
	}
	Claims := ValidToken.Claims.(jwt.MapClaims)
	return Claims, nil
}

func LoginRequired(AllowedRoles []string) fiber.Handler {
	return func(c *fiber.Ctx) error {
		Headers := c.Get("Authorization")
		if Headers == "" {
			return c.Status(403).JSON("Missing Authorization")
		}

		Token := strings.Split(Headers, " ")[1]
		Claims, err := VerifyToken(Token)
		if err != nil {
			return err
		}
		RequestedRole := Claims["Role"]

		for _, v := range AllowedRoles {
			if v == RequestedRole {
				return c.Next()
			}
		}
		return c.Status(403).JSON("Access denied: insufficient permissions")
	}
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
