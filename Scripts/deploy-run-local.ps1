cd ..
dotnet restore ./Backend/Api.sln --verbosity m
cd Frontend
npm install
npm run build
cd ..
Remove-Item -Recurse -Force "./Backend/Api/ClientApp/build"
Copy-Item -Path "./Frontend/build" -Destination "./Backend/Api/ClientApp/build" -Recurse
cd Backend/Api
dotnet run