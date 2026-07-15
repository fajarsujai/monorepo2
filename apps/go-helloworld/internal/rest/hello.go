package rest

import (
	"net/http"

	"go-helloworld/domain"

	"github.com/labstack/echo/v4"
)

func HelloHandler(c echo.Context) error {
	return c.JSON(http.StatusOK, domain.ResponseSingleData[domain.HelloResponse]{
		Code:    http.StatusOK,
		Message: "Successfully retrieved hello message",
		Data: domain.HelloResponse{
			Message: "Hello, World!",
		},
	})
}
