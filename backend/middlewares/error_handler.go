package middlewares

import (
	"backend/exceptions"

	"github.com/gofiber/fiber/v2"
)

func ErrorHandler(c *fiber.Ctx, err error) error {
	if e, ok := err.(*exceptions.Error); ok {
		return c.Status(e.Code).JSON(fiber.Map{
			"message": e.Message,
			"status":  "error",
			"code":    e.Code,
		})
	}

	if e, ok := err.(*fiber.Error); ok {
		return c.Status(e.Code).JSON(fiber.Map{
			"message": e.Message,
			"status":  "error",
			"code":    e.Code,
		})
	}

	c.Set("Cache-Control", "no-cache")
	return c.Status(500).JSON(fiber.Map{
		"status":  "error",
		"message": err.Error(),
	})
}
