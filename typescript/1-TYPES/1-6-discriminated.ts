// Union Types: OR
{
    //function: login -> success, fail
    type SuccesState = {
        result: 'success';
        response: {
            body: string;
        }
    };
    type FailState = {
        result: 'fail';
        reason: string;
    }

    type LoginState = SuccesState | FailState;

    function login(id: string, password: string): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            }
        }
    }

    //printLoginState(state: LoginState);
    // sucess -> body;
    // fail -> failure
    function printLoginState(state: LoginState) {
        if(state.result === 'success') {
            console.log(state.response.body);
        }else {
            console.log(state.reason);
        }
    }
}