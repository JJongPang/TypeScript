{
    class TimeoutError extends Error {}
    class OfflineError extends Error {}
    
    class NetworkClient {
        tryConnection(): void {
            throw new OfflineError('no network!!!!');
        }
    }
    
    class UserService {
        constructor(private client: NetworkClient) {}
    
        login() {
            this.client.tryConnection();
            // login...
        }
    }
    
    class App {
        constructor(private userService: UserService) {}
        run() {
            // 우아한 error handleing
            try {
                this.userService.login();
            } catch(error) {
                // error: any Type
                // show dialog to user
                if(error instanceof OfflineError) {
                    //
                }
            }
        };
    }
    
    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();    
}