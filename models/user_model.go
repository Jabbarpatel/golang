package models

import "time"

type Users struct {
	ID          int       `gorm:"primaryKey;autoIncrement"`
	UserName    string    `gorm:"type:varchar(100);column:user_name"`
	Password    string    `gorm:"type:varchar(100);column:password"`
	Uid         int       `gorm:"type:int;column:uid"`
	CreatedAt   time.Time `gorm:"type:timestamp;default:CURRENT_TIMESTAMP;column:created_at"`
	IsActive    int8      `gorm:"type:tinyint(1);default:1;column:is_active"`
	ContactInfo string    `gorm:"type:varchar(100);column:contact_info"`
}
