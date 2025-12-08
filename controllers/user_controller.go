package controllers

import (
	"backend/config"
	"backend/models"
	"backend/types"

	"github.com/gofiber/fiber/v2"
)

func GetAllUsers() []types.GetAllUsersResponse {
	var Users []types.GetAllUsersResponse
	config.DB.Table("users").Select("id", "user_name").Find(&Users)
	return Users
}

func GetUserByName(UserName string) *models.Users {
	var User models.Users
	Result := config.DB.Table("users").Where(&models.Users{UserName: UserName}).First(&User)
	if Result.RowsAffected == 0 {
		return nil
	}
	return &User
}

func CreateUser(UserName string, Password string, CreatedBy string, ContactInfo string, Role string) {
	NewUser := models.Users{
		UserName:    UserName,
		Password:    Password,
		CreatedBy:   CreatedBy,
		ContactInfo: ContactInfo,
		Role:        Role,
	}
	if err := config.DB.Create(&NewUser).Error; err != nil {
		panic(fiber.NewError(fiber.ErrInternalServerError.Code, err.Error()))
	}
}
