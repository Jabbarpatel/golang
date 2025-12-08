package models

type Roles struct {
	ID   int    `gorm:"type:int;primaryKey autoIncrement;column:id"`
	Role string `gorm:"type:varchar(10);column:role"`
}
