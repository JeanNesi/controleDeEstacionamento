CREATE PROCEDURE GerarRelatorio
    @plate CHAR(7)
AS
BEGIN
    SET NOCOUNT ON;

    DECLARE @planId UNIQUEIDENTIFIER, @clientId UNIQUEIDENTIFIER, @amount DECIMAL(10, 2);
    DECLARE @startTime DATETIME, @endTime DATETIME, @totalHours DECIMAL(10, 2), @totalAmount DECIMAL(10, 2);

    -- Variáveis para armazenar os resultados
    DECLARE @placa CHAR(7), @mensalista VARCHAR(3), @plano_ativo VARCHAR(3), @nome_cliente VARCHAR(100);
    DECLARE @valor_arrecadado DECIMAL(10, 2), @valor_a_pagar DECIMAL(10, 2);

    -- Obter placa do veículo
    SET @placa = @plate;

    -- Verificar se o veículo é mensalista
    SET @mensalista = (CASE WHEN EXISTS (SELECT 1 FROM vehicles WHERE plate = @placa AND planId IS NOT NULL) THEN 'Sim' ELSE 'Não' END);

    -- Verificar se o plano está ativo
    SET @planId = (SELECT planId FROM vehicles WHERE plate = @placa);
    SET @plano_ativo = (CASE WHEN @planId IS NOT NULL AND EXISTS (SELECT 1 FROM plans WHERE id = @planId AND finalDate >= GETDATE()) THEN 'Sim' ELSE 'Não' END);

    -- Obter o nome do cliente
    SET @nome_cliente = (SELECT name FROM clients WHERE id = (SELECT clientId FROM vehicles WHERE plate = @placa));

    -- Obter o valor arrecadado
    SET @clientId = (SELECT clientId FROM vehicles WHERE plate = @placa);
    SET @valor_arrecadado = (SELECT SUM(amount) FROM payments WHERE clientId = @clientId);

    -- Obter o valor a pagar
    SET @amount = (SELECT amount FROM plans WHERE id = @planId);
    SET @startTime = (SELECT startTime FROM reservations WHERE vehicleId = (SELECT id FROM vehicles WHERE plate = @placa));
    SET @endTime = (SELECT endTime FROM reservations WHERE vehicleId = (SELECT id FROM vehicles WHERE plate = @placa));
    SET @totalHours = DATEDIFF(HOUR, @startTime, @endTime);
    SET @totalAmount = (SELECT amountPerHour * @totalHours FROM parkingLott WHERE id = (SELECT parkingId FROM reservations WHERE vehicleId = (SELECT id FROM vehicles WHERE plate = @placa)));
    SET @valor_a_pagar = @totalAmount + @amount;

    -- Retornar os resultados
    SELECT @placa AS Placa, @mensalista AS Mensalista, @plano_ativo AS Plano_ativo, @nome_cliente AS Nome_cliente,
           @valor_arrecadado AS Valor_arrecadado, @valor_a_pagar AS Valor_a_pagar;
END;

EXEC GerarRelatorio @plate = 'ABC1234';

