package utils

import (
	"golang.org/x/crypto/bcrypt"
)

func GenerateHashString(value string) string {
	hash, _ := bcrypt.GenerateFromPassword([]byte(value), bcrypt.DefaultCost)
	return string(hash)
}

func VerifyHashedString(hash string, plain string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(hash), []byte(plain))
	return err == nil
}
