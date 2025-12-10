package routes

import (
	"backend/constants"
	"backend/controllers"
	"backend/middlewares"
	"backend/services/user_service"
	"backend/types"

	"github.com/gofiber/fiber/v2"
)

func UsersRouter(Router fiber.Router) {

	Router.Get("/get_users", middlewares.LoginRequired([]string{constants.Roles.DEVELOPER, constants.Roles.ADMIN}), func(c *fiber.Ctx) error {
		Users := controllers.GetAllUsers()
		return c.Status(200).JSON(Users)
	})

	Router.Post("/create_user", middlewares.LoginRequired([]string{constants.Roles.DEVELOPER, constants.Roles.ADMIN}), func(c *fiber.Ctx) error {
		var Payload types.CreateUserRequestElements
		if err := c.BodyParser(&Payload); err != nil {
			panic(fiber.NewError(fiber.ErrBadRequest.Code, err.Error()))
		}

		UserName := Payload.UserName
		Password := Payload.Password
		CreatedBy := Payload.CreatedBy
		ContactInfo := Payload.ContactInfo
		RoleID := Payload.RoleID
		user_service.CreateUser(UserName, Password, CreatedBy, ContactInfo, RoleID)
		return c.Status(200).JSON(constants.Status.SUCCESS)
	})

	Router.Post("/deactivate_user/:id", middlewares.LoginRequired([]string{constants.Roles.DEVELOPER, constants.Roles.ADMIN}), func(c *fiber.Ctx) error {
		ID, _ := c.ParamsInt("id")
		user_service.DeactivateUser(ID)
		return c.Status(200).JSON(constants.Status.SUCCESS)
	})

	Router.Post("/reactivate_user/:id", middlewares.LoginRequired([]string{constants.Roles.DEVELOPER, constants.Roles.ADMIN}), func(c *fiber.Ctx) error {
		ID, _ := c.ParamsInt("id")
		user_service.ReactivateUser(ID)
		return c.Status(200).JSON(constants.Status.SUCCESS)
	})

	Router.Post("/update_user/:id", middlewares.LoginRequired([]string{constants.Roles.DEVELOPER, constants.Roles.ADMIN}), func(c *fiber.Ctx) error {
		var Payload types.UpdateUserRequestElement
		if err := c.BodyParser(&Payload); err != nil {
			panic(fiber.NewError(fiber.ErrBadRequest.Code, err.Error()))
		}
		ID := Payload.ID
		UserName := Payload.UserName
		ContactInfo := Payload.ContactInfo
		RoleID := Payload.RoleID
		return c.JSON("success")
	})

}
