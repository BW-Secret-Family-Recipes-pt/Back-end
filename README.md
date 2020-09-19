# Back-end

Secret Family Recipes

api/register Post

{
	"username": "test",
	"password": "password",
	"email": "email@email.com"
}

api/login Post

{
	"username": "ryan",
	"password": "password"
}

api/users and api/users/:id Get/Post/Put/Delete

api/recipes GET

Requires an authorization header with a JWT, and will return an array of objects in this format:

[
  {
    "id": 1,
    "user_id": 1,
    "recipe_name": "recipe1",
    "source": "source1",
    "recipe_instructions": "instructions1"
  },
  {
    "id": 2,
    "user_id": 1,
    "recipe_name": "recipe2",
    "source": "source2",
    "recipe_instructions": "instructions2"
  }
]

api/recipes/:id/ingredients GET

Requires an authorization header with a JWT, and will return an array of objects in this format:

[
  {
    "recipe_name": "recipe1",
    "ingredient_name": "brown rice"
  },
  {
    "recipe_name": "recipe1",
    "ingredient_name": "rice"
  }
]

api/recipes POST

Requires an authorization header with a JWT. Expects an object with this format as the request body:

  {
     "user_id": 1,
	"recipe_name": "recipe1",
     "source": "source1",
     "recipe_instructions": "instructions1"
  }

/recipes/:id PUT

Requires an authorization header with a JWT. Expects an object with this format as the request body:

  {
     "user_id": 1,
	"recipe_name": "recipe1",
     "source": "source1",
     "recipe_instructions": "instructions1"
  }

/recipes/:id DELETE

Requires an authorization header with a JWT. Deletes the selected recipe if it exists.
