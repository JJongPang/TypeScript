{
    type NetWorkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }

    type SuccessState = {
        result: 'success';
    }

    type ResultState = SuccessState | NetWorkErrorState; 
    
    class NetworkClient {
        tryConnect(state: ResultState) {
            if(state.result === 'success') {
                // ...
                // ...
            }
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
            } catch(error) {
                // show dialog to user
            }
        }
    }

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    
    console.log(app.run());  
}
