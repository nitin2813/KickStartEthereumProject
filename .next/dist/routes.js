'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', 'campaigns/show').add('/campaigns/:address/requests', 'campaigns/requests/index').add('/campaigns/:address/requests/new', 'campaigns/requests/new');
module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFHQSxPQUNDLEFBREQsSUFDSyxBQURMLGtCQUNzQixBQUR0QixpQkFFQyxBQUZELElBRUssQUFGTCx1QkFFMkIsQUFGM0Isa0JBR0MsQUFIRCxJQUdLLEFBSEwsZ0NBR29DLEFBSHBDLDRCQUlDLEFBSkQsSUFJSyxBQUpMLG9DQUl3QyxBQUp4QztBQUtBLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiQzovQmxvY2stRXRoZXIva2lja3N0YXJ0In0=