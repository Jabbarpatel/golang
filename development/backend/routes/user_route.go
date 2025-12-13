package routes

import (
	"fmt"

	"backend/constants"
	"backend/controllers"
	"backend/middlewares"
	"backend/services/user_service"
	"backend/types"

	"github.com/gofiber/fiber/v2"
)

func UsersRouter(Router fiber.Router) {
	Router.Get("/get_users", middlewares.LoginRequired([]string{constants.ROLES.DEVELOPER, constants.ROLES.ADMIN}), func(c *fiber.Ctx) error {
		Users := controllers.GetAllUsers()
		return c.Status(constants.STATUS_CODES.OK).JSON(Users)
	})

	Router.Post("/create_user", middlewares.LoginRequired([]string{constants.ROLES.DEVELOPER, constants.ROLES.ADMIN}), func(c *fiber.Ctx) error {
		var Payload types.CreateUserRequestElements
		if err := c.BodyParser(&Payload); err != nil {
			return err
		}

		UserName := Payload.UserName
		Password := Payload.Password
		CreatedBy := Payload.CreatedBy
		ContactInfo := Payload.ContactInfo
		RoleID := Payload.RoleID
		err := user_service.CreateUser(UserName, Password, CreatedBy, ContactInfo, RoleID)
		if err != nil {
			return err
		}
		return c.Status(constants.STATUS_CODES.OK).JSON(constants.STATUS.SUCCESS)
	})

	Router.Post("/deactivate_user/:id", middlewares.LoginRequired([]string{constants.ROLES.DEVELOPER, constants.ROLES.ADMIN}), func(c *fiber.Ctx) error {
		ID, _ := c.ParamsInt("id")
		err := user_service.DeactivateUser(ID)
		if err != nil {
			return err
		}
		return c.Status(constants.STATUS_CODES.OK).JSON(constants.STATUS.SUCCESS)
	})

	Router.Post("/reactivate_user/:id", middlewares.LoginRequired([]string{constants.ROLES.DEVELOPER, constants.ROLES.ADMIN}), func(c *fiber.Ctx) error {
		ID, _ := c.ParamsInt("id")
		err := user_service.ReactivateUser(ID)
		if err != nil {
			return err
		}
		return c.Status(constants.STATUS_CODES.OK).JSON(constants.STATUS.SUCCESS)
	})

	Router.Post("/update_user/:id", middlewares.LoginRequired([]string{constants.ROLES.DEVELOPER, constants.ROLES.ADMIN}), func(c *fiber.Ctx) error {
		var Payload types.UpdateUserRequestElement
		if err := c.BodyParser(&Payload); err != nil {
			return err
		}
		ID := Payload.ID
		UserName := Payload.UserName
		ContactInfo := Payload.ContactInfo
		RoleID := Payload.RoleID
		fmt.Println(ID, UserName, ContactInfo, RoleID)
		return c.Status(constants.STATUS_CODES.OK).JSON(constants.STATUS.SUCCESS)
	})
}
