# Getting started

## Installation

Clone the repository

    git clone git@github.com:sinarahmany/dlcg-assessment-app.git

Switch to the repo folder

    cd dlcg-assessment-app

Install all the dependencies using composer

    composer install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Install all dependencies from the package. json file

    npm install

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

After migration import the attached file named "**sample.sql**" into the same database as your current application

Start the local development server

    php artisan serve

Start Vite Dev Server 

    npm run dev

You can now access the server at http://localhost:8000


**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    php artisan migrate
    php artisan serve

You can also check the official laravel installation guide for server requirements. [Official Documentation](https://laravel.com/docs/5.4/installation#installation)


----------

# Testing API

Run the laravel development server

    php artisan serve

The api can now be accessed at

    http://localhost:8000/api

To get list of all categories

    http://localhost:8000/api/categories

To get nested list of all categories and it`s related products

    http://localhost:8000/api/categories?nested=true

To get a specific category and it`s related products

    http://localhost:8000/api/categories/{id}

To get list of all products 

    http://localhost:8000/api/products

To get list of products under a specific category

    http://localhost:8000/api/products?category={category-id}

To get list of a specific product

    http://localhost:8000/api/products/{id}

----------

# Pages

To view list of all categories and it`s related products

    http://localhost:8000/categories

To view list of all products grouped by their category

    http://localhost:8000/products

To add a new product

    http://localhost:8000/products/create



