package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type SomeStruct struct {
	Id    int    `json:"id"`
	Value string `json:"value"`
}

func main() {
	data := []SomeStruct{}
	data = append(data, SomeStruct{Id: 1, Value: "banana"})
	data = append(data, SomeStruct{Id: 2, Value: "apple"})

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	//jsonStirng := `[{"id":1,"value":"banana"}]`

	app.Get("/data", func(c *fiber.Ctx) error {
		//fmt.Println(data)
		return c.JSON(data)
	})

	app.Listen(":4000")
}
