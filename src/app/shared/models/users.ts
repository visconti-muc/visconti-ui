export class Users {
    private username: string;
    private currentToken: string[];

    get user(): string {
        return this.username;
    }
    set user(val: string) {
        this.username = val;
    }
    get token(): string[] {
        return this.currentToken;
    }
    set token(val: string[]) {
        this.currentToken = val;
    }
}
