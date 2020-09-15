namespace Api.Core.Services.Interfaces
{
    public interface ILoggerService
    {
        void Info(string message);
        void Warn(string message);
        void Debug(string message);
        void Error(string message);
    }
}
