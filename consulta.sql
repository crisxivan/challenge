SELECT C.ID, C.Nombre, C.Apellido, SUM(V.Importe) AS TotalCompras
FROM Clientes C
JOIN Ventas V ON C.ID = V.Id_cliente
WHERE TIMESTAMPDIFF(MONTH, V.Fecha, CURDATE()) <= 12
GROUP BY C.ID, C.Nombre, C.Apellido
HAVING SUM(V.Importe) > 100000;

TIMESTAMPDIFF(MONTH, V.Fecha, CURDATE()) calcula la diferencia de meses entre la fecha de la venta y la fecha actual.
El WHERE filtra las ventas que han ocurrido en los últimos 12 meses.
La cláusula HAVING asegura que solo devuelva clientes con compras superior a $100000.