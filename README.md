<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Secret Family recipes</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Few lines describing your project.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>



## 🏁 Getting Started <a name = "getting_started"></a>


### User Api end points

All requests except register and login are behind authorization with JWT

```
GET api/users Gets all users
```
```
GET api/users/:id Gets users by id
```
```
GET api/users/:id/recipes Gets recipes from selected user
```
```
DELETE api/users/:id Deletes selected user
```
```
PUT api/users/:id Updates selected user
```
```
POST api/login logs in a user
{
	"username": "test1",
	"password": "password"
}

```
```
POST api/register registers a user
{
	"username": "test1",
	"password": "password"
}

```


### Recipe API

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
GET api/recipes Gets all Recipes

```
```
GET api/recipes/:id Gets recipe by id

```
```
POST api/recipes adds a recipe
{
 "title": "recipe3",
  "source": "source3",
	"ingredients": "ingredients3",
	"instructions": "instructions3",
	"category": "category3",
	"user_id": 1
}

```

```
PUT api/recipes updates a recipe
{
 "title": "recipe3",
	"source": "source3",
	"ingredients": "ingredients3",
	"instructions": "instructions3",
	"category": "category3",
	"user_id": 1
}

```

```
DELETE api/recipes deletes a recipe

```


## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@ryan-webdev](https://github.com/ryan-webdev) 


