import {SignInButton, useAuth, UserButton} from "@clerk/remix";
import {Link} from "@remix-run/react";

// @ts-ignore
const NavItem = ({ children }) => {
    return <li style={{ padding: '5px' , margin: '0 5px', color: 'black', listStyle: 'none' }}>{children}</li>;
}

export default function MainLayout(props: any) {
    const { children } = props;
    const { isSignedIn } = useAuth();
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4", display: "flex", width: '50%', justifyContent: 'space-between' }}>
            <div>
                <h1>Clerk Remix Music Store</h1>
                <ul style={{ display: 'flex', padding: '5px'}}>
                    <NavItem><Link to="/">Homepage</Link></NavItem>
                    <NavItem><Link to="/list">Shopping List</Link></NavItem>
                </ul>
                <hr style={{borderTop: '1px dashed black'}}></hr>
                {children}
            </div>
            { !isSignedIn &&
                <div style={{ padding: '30px'}}>
                    <SignInButton mode={"modal"}></SignInButton>
                </div>
            }
            { isSignedIn &&
                <div style={{ padding: '30px'}}>
                    <UserButton afterSignOutUrl='/'></UserButton>
                </div>
            }
        </div>
    );
}
