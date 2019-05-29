-- list of all of our orders
--SELECT customers.CustomerName, customers.Country, orders.*, employees.FirstName, employees.LastName
--FROM customers
--inner join orders on customers.customerId = orders.customerId

--list all customer and info from orders
select p.ProductName, count(*) as Sold
from products as p
inner join OrderDetails as od on p.productId = od.productId
group by 1
order by sold desc
limit 5
