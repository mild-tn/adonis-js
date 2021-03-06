"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const CompetitorSeeder = require("./CompetitorSeeder");
const AdminSeeder = require("./AdminSeeder");

class DatabaseSeeder {
  async run() {
    await CompetitorSeeder.run();
    await AdminSeeder.run();
  }
}

module.exports = DatabaseSeeder;
