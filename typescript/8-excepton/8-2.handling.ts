
{
    class NetworkClient {
        tryConnect(): void {
            throw new Error(`No network!`);
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {}

        login() {
            this.client.tryConnect();
            console.log('login~!!!');
        }
    }

    class App {
        constructor(private userService: UserService) {}
        run() {
            try {
                this.userService.login();
            } catch(e) {
                // show dialog to user
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    
    console.log(app.run());  
}
