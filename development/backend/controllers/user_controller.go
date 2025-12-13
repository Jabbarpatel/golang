package controllers

import (
	"backend/config"
	"backend/constants"
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

func GetUserByID(ID int) *models.Users {
	var User models.Users
	Result := config.DB.Table("users").Where(&models.Users{ID: ID}).First(&User)
	if Result.RowsAffected == 0 {
		return nil
	}
	return &User
}

func CreateUser(UserName string, Password string, CreatedBy string, ContactInfo string, Role string) error {
	NewUser := models.Users{
		UserName:    UserName,
		Password:    Password,
		CreatedBy:   CreatedBy,
		ContactInfo: ContactInfo,
		Role:        Role,
	}
	if err := config.DB.Create(&NewUser).Error; err != nil {
		return fiber.NewError(constants.STATUS_CODES.INTERNAL_SERVER, err.Error())
	}
	return nil
}

func DeactivateUser(ID int) error {
	if err := config.DB.Table("users").Where(&models.Users{ID: ID}).Update("is_active", false).Error; err != nil {
		return fiber.NewError(constants.STATUS_CODES.INTERNAL_SERVER, err.Error())
	}
	return nil
}

func ReactivateUser(ID int) error {
	if err := config.DB.Table("users").Where(&models.Users{ID: ID}).Update("is_active", true).Error; err != nil {
		return fiber.NewError(constants.STATUS_CODES.INTERNAL_SERVER, err.Error())
	}
	return nil
}

func UpdateUser(ID int, UserName string, ContactInfo string, Role string, Active int) error {
	if err := config.DB.Table("users").Where(&models.Users{ID: ID}).Updates(map[string]interface{}{
		"user_name":    UserName,
		"contact_info": ContactInfo,
		"role":         Role,
		"is_active":    Active,
	}).Error; err != nil {
		return fiber.NewError(constants.STATUS_CODES.INTERNAL_SERVER, err.Error())
	}
	return nil
}
