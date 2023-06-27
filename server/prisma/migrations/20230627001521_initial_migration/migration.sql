BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[addresses] (
    [id] NVARCHAR(1000) NOT NULL,
    [street] NVARCHAR(1000) NOT NULL,
    [city] NVARCHAR(1000) NOT NULL,
    [uf] NVARCHAR(1000) NOT NULL,
    [zipCode] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [addresses_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    CONSTRAINT [addresses_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [lastAccess] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [users_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [addressId] NVARCHAR(1000),
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[reservations] (
    [id] NVARCHAR(1000) NOT NULL,
    [startTime] DATETIME2 NOT NULL,
    [endTime] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [reservations_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [vehicleId] NVARCHAR(1000) NOT NULL,
    [parkingId] NVARCHAR(1000) NOT NULL,
    [clientId] NVARCHAR(1000),
    CONSTRAINT [reservations_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[parkingLot] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [amountPerHour] DECIMAL(10,2) NOT NULL,
    [capacity] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [parkingLot_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    CONSTRAINT [parkingLot_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[payments] (
    [id] NVARCHAR(1000) NOT NULL,
    [amount] DECIMAL(10,2) NOT NULL,
    [paymentDate] DATETIME2,
    [reservationId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [payments_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [clientId] NVARCHAR(1000),
    CONSTRAINT [payments_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[clients] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [phoneNumber] NVARCHAR(1000) NOT NULL,
    [cpf] NVARCHAR(1000) NOT NULL,
    [gender] NVARCHAR(1000),
    [birthDate] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [clients_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [planId] NVARCHAR(1000),
    [userId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [clients_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [clients_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [clients_cpf_key] UNIQUE NONCLUSTERED ([cpf])
);

-- CreateTable
CREATE TABLE [dbo].[vehicles] (
    [id] NVARCHAR(1000) NOT NULL,
    [clientId] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [plate] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [vehicles_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [planId] NVARCHAR(1000),
    CONSTRAINT [vehicles_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[clientsVehicles] (
    [id] NVARCHAR(1000) NOT NULL,
    [vehicleId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [clientsVehicles_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    [clientId] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [clientsVehicles_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[plan] (
    [id] NVARCHAR(1000) NOT NULL,
    [amount] DECIMAL(10,2) NOT NULL,
    [finalDate] DATETIME2,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [plan_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2,
    CONSTRAINT [plan_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[users] ADD CONSTRAINT [users_addressId_fkey] FOREIGN KEY ([addressId]) REFERENCES [dbo].[addresses]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[reservations] ADD CONSTRAINT [reservations_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[clients]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[reservations] ADD CONSTRAINT [reservations_parkingId_fkey] FOREIGN KEY ([parkingId]) REFERENCES [dbo].[parkingLot]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[reservations] ADD CONSTRAINT [reservations_vehicleId_fkey] FOREIGN KEY ([vehicleId]) REFERENCES [dbo].[vehicles]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[payments] ADD CONSTRAINT [payments_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[clients]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[payments] ADD CONSTRAINT [payments_reservationId_fkey] FOREIGN KEY ([reservationId]) REFERENCES [dbo].[reservations]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[clients] ADD CONSTRAINT [clients_planId_fkey] FOREIGN KEY ([planId]) REFERENCES [dbo].[plan]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[clients] ADD CONSTRAINT [clients_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[vehicles] ADD CONSTRAINT [vehicles_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[clients]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[vehicles] ADD CONSTRAINT [vehicles_planId_fkey] FOREIGN KEY ([planId]) REFERENCES [dbo].[plan]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[clientsVehicles] ADD CONSTRAINT [clientsVehicles_clientId_fkey] FOREIGN KEY ([clientId]) REFERENCES [dbo].[clients]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[clientsVehicles] ADD CONSTRAINT [clientsVehicles_vehicleId_fkey] FOREIGN KEY ([vehicleId]) REFERENCES [dbo].[vehicles]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
