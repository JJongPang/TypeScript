{
    class TimeoutError extends Error {}
    class OfflineError extends Error {}
    
    type SuccessState = {
        result: 'success';
    }

    type NetworkErrorState = {
        result: 'fail'
        reason: 'offline' | 'down' | 'timeout';
    }

    type ResultState = SuccessState | NetworkErrorState;

    class NetworkClient {
        tryConnection(): ResultState {
            return {
                result: 'success'
            }
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
