# Server — local run & seed (Windows)

This file explains how to run the included Windows helper to start MongoDB and seed the local `db` database so you can view users in MongoDB Compass.

Prerequisites
- MongoDB Community Server installed OR have `mongod.exe` available on your machine
- Node and npm installed

Run the helper batch (recommended)
1. Open File Explorer and double-click `scripts\run-seed-windows.bat`, OR run it from PowerShell:

```powershell
cd D:\react\Travel_Website_react
scripts\run-seed-windows.bat
```

2. The script will:
- create `D:\data\db` if it does not exist
- try to start `mongod.exe` from the default path set inside the batch file
- run `npm run seed:db` to insert sample users into the `db` database

3. When the script finishes, open MongoDB Compass, click Refresh, then expand database `db` and open the `users` collection to view documents.

If `mongod.exe` is not at the default path
- Edit `scripts\run-seed-windows.bat` and change the `MONGOD_PATH` variable to point at your `mongod.exe` install location (for example `C:\Program Files\MongoDB\Server\6.0\bin\mongod.exe`).

Security notes
- The seed script inserts sample development accounts; do not run this against production databases.
- Keep any local `server/.env` out of version control.
