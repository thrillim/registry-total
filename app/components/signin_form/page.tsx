export default function SignInForm() {
    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div>
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    );
}